import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import { getAuthUser } from "@/lib/auth";

// GET /api/orders/[id] - get order by MongoDB _id
export async function GET(request, { params }) {
	try {
		await connectDB();
		const order = await Order.findById(params.id);
		if (!order) {
			return NextResponse.json({ error: "Order not found" }, { status: 404 });
		}
		return NextResponse.json({ order }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}

// PUT /api/orders/[id] - update order status (admin only)
export async function PUT(request, { params }) {
	try {
		const user = await getAuthUser();
		if (!user || user.role !== "admin") {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		await connectDB();
		const { status } = await request.json();
		const order = await Order.findByIdAndUpdate(params.id, { status }, { new: true });
		if (!order) {
			return NextResponse.json({ error: "Order not found" }, { status: 404 });
		}
		return NextResponse.json({ order }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
