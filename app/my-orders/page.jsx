"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/AuthContext";
import Link from "next/link";
import "@/app/styles/MyOrders.css";

const STATUS_COLORS = {
	pending: "#D4A373",
	paid: "#8DAA9D",
	processing: "#C67B5C",
	shipped: "#6E8E80",
	delivered: "#4CAF50",
	cancelled: "#D4918E",
};

export default function MyOrdersPage() {
	const { current: user, loading: authLoading } = useUser();
	const router = useRouter();
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (authLoading) return;
		if (!user) {
			router.push("/login");
			return;
		}
		fetch("/api/my-orders")
			.then((r) => r.json())
			.then((data) => setOrders(data.orders || []))
			.finally(() => setLoading(false));
	}, [user, authLoading, router]);

	if (authLoading || loading) {
		return (
			<div className="my-orders-page">
				<div className="my-orders-container">
					<h1>My Orders</h1>
					<p className="loading-text">Loading your orders...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="my-orders-page">
			<div className="my-orders-container">
				<h1>My Orders</h1>

				{orders.length === 0 ? (
					<div className="no-orders">
						<span className="no-orders-icon">📦</span>
						<p>You haven't placed any orders yet.</p>
						<Link href="/" className="shop-now-btn">
							Start Shopping
						</Link>
					</div>
				) : (
					<div className="orders-list">
						{orders.map((order) => (
							<Link href={`/order/${order._id}`} key={order._id} className="order-card">
								<div className="order-card-header">
									<span className="order-id">{order.orderId}</span>
									<span
										className="order-status"
										style={{ background: STATUS_COLORS[order.status] || "#999" }}
									>
										{order.status.charAt(0).toUpperCase() + order.status.slice(1)}
									</span>
								</div>
								<div className="order-card-body">
									<div className="order-meta">
										<span className="order-date">
											{new Date(order.createdAt).toLocaleDateString("en-IN", {
												day: "numeric",
												month: "short",
												year: "numeric",
											})}
										</span>
										<span className="order-amount">₹{order.amount}</span>
									</div>
									<p className="order-products">{order.products}</p>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
