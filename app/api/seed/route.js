import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import Category from "@/models/Category";
import Product from "@/models/Product";

// GET /api/seed - returns current DB counts
export async function GET() {
	try {
		await connectDB();
		const [totalUsers, admins, categories, products] = await Promise.all([
			User.countDocuments(),
			User.countDocuments({ role: "admin" }),
			Category.countDocuments(),
			Product.countDocuments(),
		]);
		return NextResponse.json({ totalUsers, admins, categories, products }, { status: 200 });
	} catch (error) {
		console.error("Seed GET error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
