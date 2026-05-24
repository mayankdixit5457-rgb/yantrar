import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

import PremiumProductPage from "@/components/products/PremiumProductPage";
import ComponentProductPage from "@/components/products/ComponentProductPage";

export default async function ProductPage({ params }) {

	await connectDB();

	const product = await Product.findOne({
		slug: params.slug,
	}).lean();

	if (!product) {
		return <div>Product not found</div>;
	}

	const relatedProducts = await Product.find({
		category: product.category,
		_id: { $ne: product._id },
	})
		.limit(4)
		.lean();

	// COMPONENT CATEGORIES

	const componentCategories = [
		"motors",
		"frames",
		"battery",
		"boards",
		"camera",
		"charger",
		"radio",
		"tools",
		"wires",
	];

	const isComponent =
		componentCategories.includes(
			product.category?.toLowerCase()
		);

	// COMPONENT STYLE PAGE

	if (isComponent) {
		return (
			<ComponentProductPage
				product={JSON.parse(JSON.stringify(product))}
				relatedProducts={JSON.parse(
					JSON.stringify(relatedProducts)
				)}
			/>
		);
	}

	// PREMIUM DRONE / RC PAGE

	return (
		<PremiumProductPage
			product={JSON.parse(JSON.stringify(product))}
			relatedProducts={JSON.parse(
				JSON.stringify(relatedProducts)
			)}
		/>
	);
}