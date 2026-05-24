"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import "@/app/styles/OrderSuccess.css";

function OrderSuccessContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const orderId = searchParams.get("orderId");

	return (
		<div className="order-success-page">
			<div className="success-card">
				<div className="success-icon">✅</div>
				<h1>Order Placed Successfully</h1>
				<p className="success-text">Thank you for your purchase!</p>
				<div className="order-id-box">
					<span>Your Order ID</span>
					<strong>{orderId}</strong>
				</div>
				<p className="track-note">Use this Order ID and your phone number to track your order.</p>
				<div className="success-actions">
					<button className="track-btn" onClick={() => router.push("/track-order")}>
						Track Order
					</button>
					<button className="shop-btn" onClick={() => router.push("/")}>
						Continue Shopping
					</button>
				</div>
			</div>
		</div>
	);
}

export default function OrderSuccessPage() {
	return (
		<Suspense
			fallback={
				<div className="order-success-page">
					<p>Loading...</p>
				</div>
			}
		>
			<OrderSuccessContent />
		</Suspense>
	);
}
