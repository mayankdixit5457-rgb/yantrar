import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import crypto from "crypto";

// POST /api/razorpay-verify — verify payment signature
export async function POST(request) {
	try {
		if (!process.env.RAZORPAY_KEY_SECRET) {
			console.error("Missing RAZORPAY_KEY_SECRET in environment variables");
			return NextResponse.json({ verified: false, error: "Payment verification not configured" }, { status: 500 });
		}

		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();

		const body = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(body).digest("hex");

		if (expectedSignature !== razorpay_signature) {
			return NextResponse.json({ verified: false, error: "Invalid signature" }, { status: 400 });
		}

		return NextResponse.json({ verified: true });
	} catch (error) {
		console.error("Razorpay verify error:", error);
		return NextResponse.json({ verified: false, error: "Verification failed" }, { status: 500 });
	}
}
