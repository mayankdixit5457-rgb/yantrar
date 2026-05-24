import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

// POST /api/orders - create a new order
export async function POST(request) {
	try {
		await connectDB();
		const body = await request.json();
		const { name, email, phone, address, city, state, pincode, products, amount, paymentId } = body;

		if (!name || !phone || !address || !city || !state || !pincode || !products || !amount) {
			return NextResponse.json({ error: "Missing required order fields" }, { status: 400 });
		}

		const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);

		const order = await Order.create({
			orderId,
			name,
			email: email || "",
			phone,
			address,
			city,
			state,
			pincode,
			products,
			amount,
			paymentId: paymentId || "",
			status: paymentId ? "paid" : "pending",
		});

		return NextResponse.json({ order, orderId }, { status: 201 });
	} catch (error) {
		console.error("Order POST error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}

// GET /api/orders - admin list all orders
export async function GET() {
	try {
		await connectDB();
		const orders = await Order.find().sort({ createdAt: -1 });
		return NextResponse.json({ orders }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
