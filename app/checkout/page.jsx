"use client";

import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/context/CartContext";
import { useUser } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/styles/CheckoutPage.css";

export default function CheckoutPage() {
	const { cart, clearCart } = useContext(CartContext);
	const { current: user } = useUser();
	const router = useRouter();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		city: "",
		state: "",
		pincode: "",
	});

	useEffect(() => {
		if (user) {
			setFormData((prev) => ({
				...prev,
				name: prev.name || user.name || "",
				email: prev.email || user.email || "",
			}));
		}
	}, [user]);

	const total = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const placeOrder = async (paymentId = "") => {
		const res = await fetch("/api/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...formData,
				products: cart
					.map(
						(item) =>
							`${item.name} (x${item.quantity})`
					)
					.join(", "),
				amount: total,
				paymentId,
			}),
		});

		const data = await res.json();

		if (!res.ok) {
			throw new Error(data.error || "Order failed");
		}

		return data.orderId;
	};

	const loadRazorpay = () =>
		new Promise((resolve) => {
			if (window.Razorpay) {
				return resolve(true);
			}

			const script = document.createElement("script");

			script.src =
				"https://checkout.razorpay.com/v1/checkout.js";

			script.onload = () => resolve(true);

			script.onerror = () => resolve(false);

			document.body.appendChild(script);
		});

	const validateForm = () => {
		const required = {
			name: "Full Name",
			phone: "Phone Number",
			address: "Address",
			city: "City",
			state: "State",
			pincode: "Pincode",
		};

		for (const [field, label] of Object.entries(required)) {
			if (!formData[field]?.trim()) {
				alert(`Please fill in: ${label}`);
				return false;
			}
		}

		return true;
	};

	const handlePayment = async () => {
		if (!validateForm()) return;

		const loaded = await loadRazorpay();

		if (!loaded) {
			alert(
				"Failed to load payment gateway. Please check your connection."
			);
			return;
		}

		let rzpOrder;

		try {
			const res = await fetch(
				"/api/razorpay-order",
				{
					method: "POST",
					headers: {
						"Content-Type":
							"application/json",
					},
					body: JSON.stringify({
						amount: total,
					}),
				}
			);

			const data = await res.json();

			if (!res.ok) {
				throw new Error(
					data.error ||
						"Failed to initiate payment"
				);
			}

			rzpOrder = data;
		} catch (err) {
			alert(
				"Could not initiate payment: " +
					err.message
			);
			return;
		}

		const options = {
			key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,

			amount: rzpOrder.amount,

			currency: rzpOrder.currency,

			order_id: rzpOrder.orderId,

			name: "Yantrar",

			description: "Order Payment",

			prefill: {
				name: formData.name,
				email: formData.email,
				contact: formData.phone,
			},

			handler: async function (response) {
				try {
					const verifyRes = await fetch(
						"/api/razorpay-verify",
						{
							method: "POST",
							headers: {
								"Content-Type":
									"application/json",
							},
							body: JSON.stringify({
								razorpay_order_id:
									response.razorpay_order_id,

								razorpay_payment_id:
									response.razorpay_payment_id,

								razorpay_signature:
									response.razorpay_signature,
							}),
						}
					);

					const verifyData =
						await verifyRes.json();

					if (!verifyData.verified) {
						throw new Error(
							"Payment verification failed"
						);
					}

					const orderId = await placeOrder(
						response.razorpay_payment_id
					);

					clearCart();

					router.push(
						`/order-success?orderId=${orderId}`
					);
				} catch (error) {
					console.error(
						"Post-payment error:",
						error
					);

					alert(
						"Payment received but order could not be saved. Please contact support with payment ID: " +
							response.razorpay_payment_id
					);
				}
			},
		};

		const rzp = new window.Razorpay(options);

		rzp.on("payment.failed", function (response) {
			console.error(
				"Razorpay payment failed:",
				response.error
			);

			alert(
				"Payment failed: " +
					(response.error?.description ||
						"Unknown error")
			);
		});

		rzp.open();
	};

	const handleCOD = async () => {
		if (!validateForm()) return;

		try {
			const orderId = await placeOrder();

			clearCart();

			router.push(
				`/order-success?orderId=${orderId}`
			);
		} catch (err) {
			alert(
				err.message || "Failed to place order"
			);
		}
	};

	if (cart.length === 0) {
		return (
			<section className="checkout-page">
				<h1>Your cart is empty</h1>
			</section>
		);
	}

	return (
		<section className="checkout-page">
			<h1>Checkout</h1>

			<div className="checkout-layout">
				{/* LEFT SIDE */}
				<div className="order-summary">
					<h2>Order Summary</h2>

					{cart.map((item) => (
						<div
							key={item.id}
							className="summary-item"
						>
							<Link
								href={
									item.slug
										? `/product/${item.slug}`
										: "#"
								}
								className="summary-left"
							>
								<img
									src={item.image}
									alt={item.name}
								/>

								<div className="summary-product-info">
									<h4>{item.name}</h4>

									<p>
										Qty:{" "}
										{item.quantity}
									</p>
								</div>
							</Link>

							<div className="summary-price">
								₹
								{item.price *
									item.quantity}
							</div>
						</div>
					))}

					<div className="summary-total">
						<strong>Total</strong>

						<strong className="total-amount">
							₹{total}
						</strong>
					</div>
				</div>

				{/* RIGHT SIDE */}
				<div className="checkout-form">
					<h2>Shipping Details</h2>

					<div className="form-grid">
						<input
							name="name"
							placeholder="Full Name *"
							value={formData.name}
							onChange={handleChange}
						/>

						<input
							name="email"
							placeholder="Email Address"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>

					<div className="form-grid">
						<input
							name="phone"
							placeholder="Phone Number *"
							value={formData.phone}
							onChange={handleChange}
						/>

						<input
							name="pincode"
							placeholder="Pincode *"
							value={formData.pincode}
							onChange={handleChange}
						/>
					</div>

					<textarea
						name="address"
						placeholder="Full Address *"
						value={formData.address}
						onChange={handleChange}
					/>

					<div className="form-grid">
						<input
							name="city"
							placeholder="City *"
							value={formData.city}
							onChange={handleChange}
						/>

						<input
							name="state"
							placeholder="State *"
							value={formData.state}
							onChange={handleChange}
						/>
					</div>

					<div className="checkout-actions">
						<button
							className="razorpay-btn"
							onClick={handlePayment}
						>
							Pay Online
						</button>

						<button
							className="cod-btn"
							onClick={handleCOD}
						>
							Cash on Delivery
						</button>
					</div>

					
				</div>
			</div>
		</section>
	);
}