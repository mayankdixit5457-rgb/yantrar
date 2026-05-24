"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
import "./ComponentProductPage.css";

export default function ComponentProductPage({
	product,
	relatedProducts,
}) {
	const router = useRouter();
	const { addToCart, clearCart } =
		useContext(CartContext);

	const [validImages, setValidImages] =
		useState([]);

	const [selectedImage, setSelectedImage] =
		useState("/placeholder-product.jpg");

	useEffect(() => {
		let mounted = true;

		async function loadValidImages() {
			const images =
				product.images || [];

			const checks = await Promise.all(
				images.map((src) => {
					return new Promise(
						(resolve) => {
							const img =
								new window.Image();

							img.onload =
								() =>
									resolve(
										src
									);

							img.onerror =
								() =>
									resolve(
										null
									);

							img.src =
								src;
						}
					);
				})
			);

			const filtered =
				checks.filter(
					Boolean
				);

			if (mounted) {
				setValidImages(
					filtered
				);

				setSelectedImage(
					filtered[0] ||
						"/placeholder-product.jpg"
				);
			}
		}

		loadValidImages();

		return () => {
			mounted = false;
		};
	}, [product]);

	const handleAddToCart = () => {
		addToCart({
			id: product._id,
			name: product.name,
			price: product.price,
			image:
				validImages[0] ||
				"/placeholder-product.jpg",
			slug: product.slug,
		});
	};

	const handleBuyNow = () => {
		clearCart();

		addToCart({
			id: product._id,
			name: product.name,
			price: product.price,
			image:
				validImages[0] ||
				"/placeholder-product.jpg",
			slug: product.slug,
		});

		router.push("/checkout");
	};

	return (
		<div className="component-page">
			<div className="component-container">
				<div className="component-gallery">
					<div className="component-main-image-wrap">
						<img
							src={
								selectedImage
							}
							alt={
								product.name
							}
							className="component-main-image"
						/>
					</div>

					{validImages.length >
						0 && (
						<div className="component-thumbnails">
							{validImages.map(
								(
									img,
									i
								) => (
									<img
										key={
											i
										}
										src={
											img
										}
										alt={
											product.name
										}
										onClick={() =>
											setSelectedImage(
												img
											)
										}
										className={`component-thumb ${
											selectedImage ===
											img
												? "active-component-thumb"
												: ""
										}`}
									/>
								)
							)}
						</div>
					)}
				</div>

				<div className="component-content">
					<div className="component-category">
						{
							product.category
						}
					</div>

					<h1>
						{
							product.name
						}
					</h1>

					<div className="component-price">
						₹
						{
							product.price
						}
					</div>

					<p className="component-description">
						{
							product.description
						}
					</p>

					<div className="component-stock">
						{product.inStock
							? "✔ In Stock"
							: "✖ Out Of Stock"}
					</div>

					<div className="component-buttons">
						<button
							className="component-buy-btn"
							onClick={
								handleBuyNow
							}
						>
							Buy
							Now
						</button>

						<button
							className="component-cart-btn"
							onClick={
								handleAddToCart
							}
						>
							Add
							To
							Cart
						</button>
					</div>

					<div className="component-feature-box">
						<div>
							✔ Genuine
							Product
						</div>
						<div>
							✔ Fast
							Shipping
						</div>
						<div>
							✔ Secure
							Payments
						</div>
						<div>
							✔ Technical
							Support
						</div>
					</div>
				</div>
			</div>

			<section className="component-spec-section">
				<h2>
					Specifications
				</h2>

				<div className="component-spec-grid">
					{product.specs?.map(
						(
							spec,
							i
						) => (
							<div
								key={
									i
								}
								className="component-spec-card"
							>
								{
									spec
								}
							</div>
						)
					)}
				</div>
			</section>
		</div>
	);
}