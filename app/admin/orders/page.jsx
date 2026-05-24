"use client";
import { useEffect, useState } from "react";
import "../admin.css";

const STATUS_OPTIONS = ["pending", "paid", "processing", "shipped", "delivered", "cancelled"];

export default function AdminOrdersPage() {
	const [orders, setOrders] = useState([]);
	const [expandedId, setExpandedId] = useState(null);

	const loadOrders = () =>
		fetch("/api/orders")
			.then((r) => r.json())
			.then((d) => setOrders(d.orders || []));

	useEffect(() => {
		loadOrders();
	}, []);

	const handleStatusChange = async (id, status) => {
		await fetch(`/api/orders/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ status }),
		});
		loadOrders();
	};

	const toggleExpand = (id) => {
		setExpandedId((prev) => (prev === id ? null : id));
	};

	return (
		<div className="admin-orders-page">
			<h1>Orders Management</h1>

			<table className="orders-table">
				<thead>
					<tr>
						<th>Order ID</th>
						<th>Customer</th>
						<th>Phone</th>
						<th>Amount</th>
						<th>Date</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => (
						<>
							<tr
								key={order._id}
								className={`order-row ${expandedId === order._id ? "expanded" : ""}`}
								onClick={() => toggleExpand(order._id)}
								style={{ cursor: "pointer" }}
							>
								<td>
									<strong>{order.orderId}</strong>
								</td>
								<td>{order.name}</td>
								<td>{order.phone}</td>
								<td>₹{order.amount}</td>
								<td>{new Date(order.createdAt).toLocaleDateString("en-IN")}</td>
								<td onClick={(e) => e.stopPropagation()}>
									<select className="status-select" value={order.status} onChange={(e) => handleStatusChange(order._id, e.target.value)}>
										{STATUS_OPTIONS.map((s) => (
											<option key={s} value={s}>
												{s.charAt(0).toUpperCase() + s.slice(1)}
											</option>
										))}
									</select>
								</td>
							</tr>
							{expandedId === order._id && (
								<tr key={`${order._id}-details`} className="order-detail-row">
									<td colSpan={6}>
										<div className="order-detail-grid">
											<div className="order-detail-section">
												<h4>Customer Details</h4>
												<p>
													<span>Name:</span> {order.name}
												</p>
												<p>
													<span>Email:</span> {order.email}
												</p>
												<p>
													<span>Phone:</span> {order.phone}
												</p>
											</div>
											<div className="order-detail-section">
												<h4>Shipping Address</h4>
												<p>{order.address}</p>
												<p>
													{order.city}, {order.state} — {order.pincode}
												</p>
											</div>
											<div className="order-detail-section">
												<h4>Order Info</h4>
												<p>
													<span>Products:</span> {order.products}
												</p>
												<p>
													<span>Amount:</span> ₹{order.amount}
												</p>
												{order.paymentId && (
													<p>
														<span>Payment ID:</span> {order.paymentId}
													</p>
												)}
												<p>
													<span>Placed:</span> {new Date(order.createdAt).toLocaleString("en-IN")}
												</p>
											</div>
										</div>
									</td>
								</tr>
							)}
						</>
					))}
					{orders.length === 0 && (
						<tr>
							<td colSpan={6} style={{ textAlign: "center", color: "#999", padding: "32px" }}>
								No orders yet.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
