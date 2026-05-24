import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";
import { getAuthUser } from "@/lib/auth";

// GET /api/products - list all products, with optional ?category= and ?featured=true
export async function GET(request) {
	try {
		await connectDB();
		const { searchParams } = new URL(request.url);
		const category = searchParams.get("category");
		const featured = searchParams.get("featured");
		const slug = searchParams.get("slug");

		const filter = {};
		if (category) filter.category = category;
		if (featured === "true") filter.featured = true;
		if (slug) filter.slug = slug;

		const products = await Product.find(filter).sort({ createdAt: -1 });
		return NextResponse.json({ products }, { status: 200 });
	} catch (error) {
		console.error("Products GET error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}

// POST /api/products - create a product (admin only)
export async function POST(request) {
	try {
		const user = await getAuthUser();
		if (!user || user.role !== "admin") {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		await connectDB();
		const body = await request.json();

		const { name, slug, category, price } = body;
		if (!name || !slug || !category || !price) {
			return NextResponse.json({ error: "name, slug, category, and price are required" }, { status: 400 });
		}

		const product = await Product.create(body);
		return NextResponse.json({ product }, { status: 201 });
	} catch (error) {
		if (error.code === 11000) {
			return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
		}
		console.error("Products POST error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
