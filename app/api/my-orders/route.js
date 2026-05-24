import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import { getAuthUser } from "@/lib/auth";

// GET /api/my-orders - get orders for the logged-in user (by email)
export async function GET() {
	try {
		const user = await getAuthUser();
		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		await connectDB();
		const orders = await Order.find({ email: user.email }).sort({ createdAt: -1 });
		return NextResponse.json({ orders }, { status: 200 });
	} catch (error) {
		console.error("My orders GET error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
