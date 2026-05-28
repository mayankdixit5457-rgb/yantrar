import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

export async function POST(request, { params }) {
	try {
		await connectDB();

		const body = await request.json();

		const { name, rating, title, text } = body;

		if (!name || !rating || !title || !text) {
			return NextResponse.json(
				{ error: "All fields are required" },
				{ status: 400 }
			);
		}

		const product = await Product.findOne({
			slug: params.id,
		});

		if (!product) {
			return NextResponse.json(
				{ error: "Product not found" },
				{ status: 404 }
			);
		}

        if (!product.reviews) {
            product.reviews = [];
        }

        product.reviews.push({
            name,
            rating,
            title,
            text,
        });

		await product.save();

		return NextResponse.json(
			{
				message: "Review added successfully",
				reviews: product.reviews,
			},
			{ status: 200 }
		);

	} catch (error) {
		console.error("Review Error:", error);

		return NextResponse.json(
			{ error: "Server error" },
			{ status: 500 }
		);
	}
}