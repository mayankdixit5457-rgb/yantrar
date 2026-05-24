import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

import connectDB from "@/lib/mongodb";
import Category from "@/models/Category";
import { getAuthUser } from "@/lib/auth";

// HOMEPAGE → parent categories only
export async function GET() {
	try {
		await connectDB();

		const categories = await Category.find({ parent: null })
			.sort({ order: 1, name: 1 })
			.lean();

		return NextResponse.json({ categories }, { status: 200 });
	} catch (error) {
		console.error("Categories GET error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}

// CREATE
export async function POST(request) {
	try {
		const user = await getAuthUser();

		if (!user || user.role !== "admin") {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		await connectDB();

		const body = await request.json();
		const category = await Category.create(body);

		return NextResponse.json({ category }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}

// DELETE
export async function DELETE(request) {
	try {
		const user = await getAuthUser();

		if (!user || user.role !== "admin") {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");

		await connectDB();
		await Category.findOneAndDelete({ slug });

		return NextResponse.json({ message: "Deleted" });
	} catch (error) {
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}