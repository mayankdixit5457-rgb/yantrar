"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "@/app/styles/OrderDetails.css";

export default function OrderDetailsPage() {
	const { id } = useParams();
	const router = useRouter();
	const [order, setOrder] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/api/orders/${id}`)
			.then((r) => r.json())
			.then((data) => setOrder(data.order || null))
			.finally(() => setLoading(false));
	}, [id]);

	if (loading)
		return (
			<div className="order-details-page">
				<h2>Loading order details...</h2>
			</div>
		);
	if (!order)
		return (
			<div className="order-details-page">
				<h2>Order not found</h2>
			</div>
		);

	return (
		<div className="order-details-page">
			<div className="order-details-container">
				<button className="back-btn" onClick={() => router.back()}>
					← Back
				</button>
				<h1>Order Details</h1>

				<div className="order-info-card">
					<div className="order-row">
						<span className="label">Order ID</span>
						<span>{order.orderId}</span>
					</div>
					<div className="order-row">
						<span className="label">Status</span>
						<span>{order.status || "Processing"}</span>
					</div>
					<div className="order-row">
						<span className="label">Amount</span>
						<span>₹{order.amount}</span>
					</div>
					<div className="order-row">
						<span className="label">Payment ID</span>
						<span>{order.paymentId || "N/A"}</span>
					</div>
					<div className="order-row">
						<span className="label">Date</span>
						<span>{new Date(order.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
					</div>
				</div>

				<h2>Shipping Address</h2>
				<div className="address-card">
					<p>{order.name}</p>
					<p>{order.address}</p>
					<p>
						{order.city}, {order.state} - {order.pincode}
					</p>
					<p>Phone: {order.phone}</p>
					<p>Email: {order.email}</p>
				</div>

				<h2>Products</h2>
				<div className="address-card">
					<p>{order.products}</p>
				</div>
			</div>
		</div>
	);
}
