import connectDB from "@/lib/mongodb";
import Category from "@/models/Category";
import Product from "@/models/Product";
import Link from "next/link";
import "./category.css";

function formatName(slug) {
	return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function CategoryPage({ params }) {
	await connectDB();

	const slug = params.slug;

	const currentCategory = await Category.findOne({ slug }).lean();

	if (!currentCategory) {
		return (
			<div className="category-page">
				<div className="category-container">
					<div className="empty-state">
						<h3>Category Not Found</h3>
					</div>
				</div>
			</div>
		);
	}

	let parentCategory = null;
	let grandParentCategory = null;

	if (currentCategory.parent) {
		parentCategory = await Category.findOne({
			slug: currentCategory.parent,
		}).lean();

		if (parentCategory?.parent) {
			grandParentCategory = await Category.findOne({
				slug: parentCategory.parent,
			}).lean();
		}
	}

	const subcategories = await Category.find({
		parent: slug,
	})
		.sort({ order: 1, name: 1 })
		.lean();

	const products = await Product.find({
		category: slug,
	}).lean();

	const hasSubcategories = subcategories.length > 0;

	return (
		<div className="category-page">
			<div className="category-container">

				<div className="breadcrumb">
					<Link href="/">Home</Link>

					{grandParentCategory && (
						<>
							<span>›</span>
							<Link href={`/category/${grandParentCategory.slug}`}>
								{grandParentCategory.name}
							</Link>
						</>
					)}

					{parentCategory && (
						<>
							<span>›</span>
							<Link href={`/category/${parentCategory.slug}`}>
								{parentCategory.name}
							</Link>
						</>
					)}

					<span>›</span>
					<span className="current">{currentCategory.name}</span>
				</div>

				<div className="category-header">
					<h1>{currentCategory.name}</h1>
					<p>
						{hasSubcategories
							? "Explore specialized categories for your mission requirements."
							: "Browse premium products engineered for performance and reliability."}
					</p>
				</div>

				{hasSubcategories ? (
					<div className="category-grid">
						{subcategories.map((cat) => (
							<Link
								key={cat._id.toString()}
								href={`/category/${cat.slug}`}
								className="category-card"
							>
								<div className="category-image-wrap">
									<img
										src={cat.image || "/placeholder-category.jpg"}
										alt={cat.name}
										className="category-image"
									/>
									<div className="category-overlay" />
								</div>

								<div className="category-content">
									<h2>{cat.name}</h2>
									<span className="category-arrow">→</span>
								</div>
							</Link>
						))}
					</div>
				) : (
					<div className="product-grid">
						{products.length > 0 ? (
							products.map((product) => (
								<Link
									key={product._id.toString()}
									href={`/product/${product.slug}`}
									className="product-card"
								>
									<div className="product-image-wrap">
										<img
											src={
												product.images?.[0] ||
												"/placeholder-product.jpg"
											}
											alt={product.name}
											className="product-image"
										/>
									</div>

									<div className="product-content">
										<h2>{product.name}</h2>
										<p className="product-price">
											₹{product.price?.toLocaleString("en-IN")}
										</p>
										<p className="product-description">
											{product.shortDescription ||
												"Premium drone component"}
										</p>
									</div>
								</Link>
							))
						) : (
							<div className="empty-state">
								<h3>No Products Found</h3>
								<p>This category is currently being updated.</p>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}