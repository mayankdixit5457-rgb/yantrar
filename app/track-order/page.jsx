"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/app/styles/TrackOrder.css";

export default function TrackOrder() {
	const router = useRouter();
	const [phone, setPhone] = useState("");
	const [orderId, setOrderId] = useState("");
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searched, setSearched] = useState(false);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!phone || phone.length !== 10) return alert("Please enter a valid 10-digit phone number");
		if (!orderId) return alert("Please enter Order ID");

		setLoading(true);
		try {
			const res = await fetch(`/api/track-order?phone=${encodeURIComponent(phone)}&orderId=${encodeURIComponent(orderId)}`);
			const data = await res.json();
			setOrders(data.orders || []);
			setSearched(true);
		} catch {
			alert("Something went wrong.");
		} finally {
			setLoading(false);
		}
	};

	const getStatusClass = (status) => {
		switch (status?.toLowerCase()) {
			case "delivered":
				return "status-delivered";
			case "shipped":
				return "status-shipped";
			case "processing":
				return "status-processing";
			case "pending":
				return "status-pending";
			case "cancelled":
				return "status-cancelled";
			default:
				return "status-default";
		}
	};

	return (
		<div className="track-order-page">
			<div className="track-header">
				<button className="back-btn" onClick={() => router.back()}>
					← Back
				</button>
				<h1>Track Your Order</h1>
			</div>

			<div className="track-search-section">
				<p className="track-subhead">Enter your Order ID and Phone Number to track your order</p>
				<form onSubmit={handleSearch} className="search-form">
					<input
						type="text"
						className="search-input"
						placeholder="Order ID (e.g. ORD-123456)"
						value={orderId}
						onChange={(e) => setOrderId(e.target.value)}
					/>
					<input
						type="tel"
						className="search-input"
						placeholder="10-digit phone number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						maxLength="10"
					/>
					<button className="search-btn" disabled={loading}>
						{loading ? "Searching..." : "Search Order"}
					</button>
				</form>
			</div>

			{loading && (
				<div className="track-loading">
					<p>Searching your order...</p>
				</div>
			)}

			{searched && !loading && orders.length === 0 && (
				<div className="track-no-results">
					<h3>No Order Found</h3>
					<p>Please check your Order ID and phone number.</p>
				</div>
			)}

			{orders.length > 0 && (
				<div className="track-results">
					<div className="results-header">
						<h2>Your Order</h2>
					</div>
					<div className="orders-list">
						{orders.map((order) => (
							<div key={order._id} className="order-card">
								<div className="order-header">
									<div className="order-id-container">
										<span className="order-id-label">Order ID</span>
										<span className="order-id-value">{order.orderId}</span>
									</div>
									<span className={`order-status ${getStatusClass(order.status)}`}>{order.status || "Processing"}</span>
								</div>
								<div className="order-details">
									<div className="detail-row">
										<span className="detail-label">Date</span>
										<span className="detail-value">
											{new Date(order.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
										</span>
									</div>
									<div className="detail-row">
										<span className="detail-label">Amount</span>
										<span className="detail-value price">₹{order.amount}</span>
									</div>
								</div>
								<div className="order-actions">
									<button className="view-details-btn" onClick={() => router.push(`/order/${order._id}`)}>
										View Details
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			<div className="track-help-section">
				<h3>Need Help?</h3>
				<p>Contact our support team</p>
				<div className="help-options">
					<a href="https://wa.me/919876543210" className="help-whatsapp">
						💬 WhatsApp
					</a>
					<a href="mailto:support@artisana.in" className="help-email">
						📧 Email
					</a>
				</div>
			</div>
		</div>
	);
}
