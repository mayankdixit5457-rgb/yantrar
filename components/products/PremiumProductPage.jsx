"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
import "./PremiumProductPage.css";

export default function PremiumProductPage({
	product,
	relatedProducts,
}) {
	const router = useRouter();
	const { addToCart, clearCart } =
		useContext(CartContext);

	const [selectedImage, setSelectedImage] =
		useState(product.images?.[0]);

	const [qty, setQty] = useState(1);
	const [activeTab, setActiveTab] =
		useState("description");

	const handleAddToCart = () => {
		for (let i = 0; i < qty; i++) {
			addToCart({
				id: product._id,
				name: product.name,
				price: product.price,
				image: product.images?.[0],
				slug: product.slug,
			});
		}
	};

	const handleBuyNow = () => {
		clearCart();

		for (let i = 0; i < qty; i++) {
			addToCart({
				id: product._id,
				name: product.name,
				price: product.price,
				image: product.images?.[0],
				slug: product.slug,
			});
		}

		router.push("/checkout");
	};

	return (
		<div className="product-page">

			<div className="breadcrumb">
				Home / Shop / {product.category} / {product.name}
			</div>

			<div className="product-main">

				<div className="gallery-section">

					<div className="thumb-list">
						{product.images?.map((img, i) => (
							<img
								key={i}
								src={img}
								alt=""
								className={`thumb ${
									selectedImage === img
										? "active-thumb"
										: ""
								}`}
								onClick={() =>
									setSelectedImage(img)
								}
							/>
						))}
					</div>

					<div className="main-image-box">
						<img
							src={selectedImage}
							alt={product.name}
							className="main-image"
						/>
					</div>

				</div>

				<div className="product-info">

					<div className="product-category">
						{product.category}
					</div>

					<h1>{product.name}</h1>

					<div className="rating">
						★★★★☆ <span>(12 reviews)</span>
					</div>

					

					<div className="stock">
						In Stock
					</div>

					<div className="price">
						₹{product.price}
						<span>Incl. GST</span>
					</div>

					<p className="short-desc">
						{product.description}
					</p>

					<div className="highlights">
						<div>✓ Secure Payments</div>
						<div>✓ Pan India Delivery</div>
						<div>✓ Technical Support</div>
						<div>✓ Genuine Products</div>
					</div>

					<div className="qty-row">
						<button
							onClick={() =>
								setQty(
									Math.max(1, qty - 1)
								)
							}
						>
							-
						</button>

						<span>{qty}</span>

						<button
							onClick={() =>
								setQty(qty + 1)
							}
						>
							+
						</button>
					</div>

					<div className="action-buttons">

						<button
							className="add-cart"
							onClick={handleAddToCart}
						>
							Add to Cart
						</button>

						<button
							className="buy-now"
							onClick={handleBuyNow}
						>
							Buy Now
						</button>

					</div>

				</div>

			</div>

			<div className="tabs">

				<div className="tab-heads">
					<button
						className={
							activeTab === "description"
								? "active-tab"
								: ""
						}
						onClick={() =>
							setActiveTab("description")
						}
					>
						Description
					</button>

					<button
						className={
							activeTab === "specs"
								? "active-tab"
								: ""
						}
						onClick={() =>
							setActiveTab("specs")
						}
					>
						Specifications
					</button>
				</div>

				<div className="tab-content">
					{activeTab === "description" && (
						<p>{product.description}</p>
					)}

					{activeTab === "specs" && (
						<div className="spec-grid">
							{product.specs?.map(
								(spec, i) => (
									<div
										key={i}
										className="spec-item"
									>
										{spec}
									</div>
								)
							)}
						</div>
					)}
				</div>

			</div>

			<section className="related">

				<h2>Related Products</h2>

				<div className="related-grid">
					{relatedProducts.map((item) => (
						<div
							key={item._id}
							className="related-card"
							onClick={() =>
								router.push(
									`/product/${item.slug}`
								)
							}
						>
							<img
								src={item.images?.[0]}
								alt={item.name}
							/>
							<h3>{item.name}</h3>
							<p>₹{item.price}</p>
						</div>
					))}
				</div>

			</section>

		</div>
	);
}