"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
import "./FeaturedProducts.css";

export default function FeaturedProducts() {
	const router = useRouter();
	const { addToCart, clearCart } = useContext(CartContext);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("/api/products?featured=true")
			.then((r) => r.json())
			.then((data) => setProducts(data.products || []));
	}, []);

	
	const openProduct = (product) => router.push(`/product/${product.slug}`);

	const handleBuyNow = (product, e) => {
		e.stopPropagation();
		clearCart();
		addToCart({
			id: product._id,
			name: product.name,
			price: product.price,
			image: product.images[0],
			slug: product.slug,
		});
		router.push("/checkout");
	};

	const handleAddToCart = (product, e) => {
		e.stopPropagation();
		addToCart({
			id: product._id,
			name: product.name,
			price: product.price,
			image: product.images[0],
			slug: product.slug,
		});
	};

	return (
		<section className="featured" id="shop">
			<div className="section-label">FEATURED</div>
			<h2>Featured Drones</h2>
			<p className="section-sub">
				Handpicked selection of our best-selling aircraft
			</p>

			<div className="products-grid">
				{products.map((product) => (
					<div
						key={product._id}
						className="product-card"
						onClick={() => openProduct(product)}
					>
						<div className="product-image-wrap">
							<img src={product.images[0]} alt={product.name} />
							<div className="product-overlay"></div>

							<div className="product-badge">Featured</div>
						</div>

						<div className="product-info">
							<h3>{product.name}</h3>
							<p className="price">₹{product.price}</p>

							<div className="product-buttons">
								<button
									className="buy-btn"
									onClick={(e) => handleBuyNow(product, e)}
								>
									Buy Now
								</button>

								<button
									className="cart-btn"
									onClick={(e) => handleAddToCart(product, e)}
								>
									Add
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}