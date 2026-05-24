import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Category from "@/models/Category";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		await connectDB();

		const categories = await Category.find({})
			.sort({ order: 1, name: 1 })
			.lean();

		return NextResponse.json({ categories });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Server error" },
			{ status: 500 }
		);
	}
}