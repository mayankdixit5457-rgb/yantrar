import { NextResponse } from "next/server";

import RelatedProducts from "@/components/RelatedProducts";
export const dynamic = "force-dynamic";

import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";
import { getAuthUser } from "@/lib/auth";


// GET /api/products/[id]
export async function GET(request, { params }) {
	try {
		await connectDB();

		// FIND PRODUCT USING SLUG
		const product = await Product.findOne({
			slug: params.id,
		});

		if (!product) {
			return NextResponse.json(
				{ error: "Product not found" },
				{ status: 404 }
			);
		}

		// RELATED PRODUCTS
		const relatedProducts = await Product.find({
			category: product.category,
			_id: { $ne: product._id },
		}).limit(4);

		return NextResponse.json(
			{
				product,
				relatedProducts,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("GET Product Error:", error);

		return NextResponse.json(
			{ error: "Server error" },
			{ status: 500 }
		);
	}
}


// PUT /api/products/[id] - admin only
export async function PUT(request, { params }) {
	try {
		const user = await getAuthUser();

		if (!user || user.role !== "admin") {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		await connectDB();

		const body = await request.json();

		const product = await Product.findByIdAndUpdate(
			params.id,
			body,
			{
				new: true,
				runValidators: true,
			}
		);

		if (!product) {
			return NextResponse.json(
				{ error: "Product not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ product },
			{ status: 200 }
		);
	} catch (error) {
		console.error("PUT Product Error:", error);

		return NextResponse.json(
			{ error: "Server error" },
			{ status: 500 }
		);
	}
}


// DELETE /api/products/[id] - admin only
export async function DELETE(request, { params }) {
	try {
		const user = await getAuthUser();

		if (!user || user.role !== "admin") {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		await connectDB();

		const product = await Product.findByIdAndDelete(
			params.id
		);

		if (!product) {
			return NextResponse.json(
				{ error: "Product not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ message: "Product deleted" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("DELETE Product Error:", error);

		return NextResponse.json(
			{ error: "Server error" },
			{ status: 500 }
		);
	}
}