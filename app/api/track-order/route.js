import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

// GET /api/track-order?phone=...&orderId=...
export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const phone = searchParams.get("phone");
		const orderId = searchParams.get("orderId");

		if (!phone || !orderId) {
			return NextResponse.json({ error: "phone and orderId are required" }, { status: 400 });
		}

		await connectDB();
		const orders = await Order.find({ phone, orderId });
		return NextResponse.json({ orders }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
