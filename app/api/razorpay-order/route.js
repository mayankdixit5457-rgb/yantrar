import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import Razorpay from "razorpay";

// POST /api/razorpay-order — create a Razorpay order server-side
export async function POST(request) {
	try {
		// Check for required environment variables
		if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
			console.error("Missing Razorpay credentials in environment variables");
			return NextResponse.json({ error: "Payment gateway not configured. Please contact support." }, { status: 500 });
		}

		const { amount } = await request.json();

		if (!amount || amount <= 0) {
			return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
		}

		// Initialize Razorpay instance inside the handler
		const razorpay = new Razorpay({
			key_id: process.env.RAZORPAY_KEY_ID,
			key_secret: process.env.RAZORPAY_KEY_SECRET,
		});

		const order = await razorpay.orders.create({
			amount: Math.round(amount * 100), // paise
			currency: "INR",
			receipt: "receipt_" + Date.now(),
		});

		return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
	} catch (error) {
		console.error("Razorpay order creation error:", error);
		return NextResponse.json({ error: "Failed to create payment order" }, { status: 500 });
	}
}
