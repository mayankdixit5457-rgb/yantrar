"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
import ReviewModal from "./ReviewModal";
import Link from "next/link";
import "./PremiumProductPage.css";

import {
	Star,
	ShoppingCart,
	Truck,
	ShieldCheck,
	Headphones,
	BadgeCheck,
	ChevronLeft,
	ChevronRight,
	Heart,
	Minus,
	Plus,
} from "lucide-react";

export default function PremiumProductPage({
	product,
	relatedProducts = [],
}) {
	const router = useRouter();
	const { addToCart, clearCart } =
		useContext(CartContext);

	const images = product.images || [];
	const reviews = product.reviews || [];

	const [currentImageIndex, setCurrentImageIndex] =
		useState(0);

	const [qty, setQty] = useState(1);

	const [activeTab, setActiveTab] =
		useState("description");

	const [showAllReviews, setShowAllReviews] =
		useState(false);

	const [reviewModalOpen, setReviewModalOpen] =
		useState(false);

	const visibleReviews = showAllReviews
		? reviews
		: reviews.slice(0, 4);

	const handlePrevImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0
				? images.length - 1
				: prev - 1
		);
	};

	const handleNextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === images.length - 1
				? 0
				: prev + 1
		);
	};

	const handleAddToCart = () => {
		for (let i = 0; i < qty; i++) {
			addToCart({
				id: product._id,
				name: product.name,
				price: product.price,
				image: images[0],
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
				image: images[0],
				slug: product.slug,
			});
		}

		router.push("/checkout");
	};

	return (
		<div className="premium-product-page">
			<div className="premium-container">

							
				<div className="breadcrumb">
					<Link href="/">Home</Link>
					<span>/</span>

					<Link href="/products">Products</Link>
					<span>/</span>

					<Link href={`/category/${product.category}`}>
						{product.category}
					</Link>

					<span>/</span>

					<span>{product.name}</span>
				</div>

				{/* TOP */}
				<div className="product-top-section">

					{/* GALLERY */}
					<div className="product-gallery">

						<div className="main-image-wrapper">
							<button
								className="gallery-arrow left"
								onClick={handlePrevImage}
							>
								<ChevronLeft size={20} />
							</button>

							<img
								src={images[currentImageIndex]}
								alt={product.name}
								className="main-product-image"
							/>

							<button
								className="gallery-arrow right"
								onClick={handleNextImage}
							>
								<ChevronRight size={20} />
							</button>
						</div>

						<div className="thumbnail-row">
							{images.map((img, i) => (
								<button
									key={i}
									className={`thumb-btn ${
										currentImageIndex === i
											? "active-thumb"
											: ""
									}`}
									onClick={() =>
										setCurrentImageIndex(i)
									}
								>
									<img
										src={img}
										alt={product.name}
									/>
								</button>
							))}
						</div>
					</div>

					{/* DETAILS */}
					<div className="product-details">

						<div className="best-seller-badge">
							Best Seller
						</div>

						<h1 className="product-title">
							{product.name}
						</h1>

						<div className="rating-row">
							<div className="stars">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										size={14}
										fill="#f5b301"
										stroke="#f5b301"
									/>
								))}
							</div>

							<span>
								4.8 ({reviews.length} Reviews)
							</span>
						</div>

						<div className="product-price">
							₹{product.price}
						</div>

						<div className="tax-text">
							Inclusive of all taxes
						</div>

						<div className="stock-row">
							<div className="stock-dot"></div>
							<span>In Stock</span>
							<p>Ships in 2–4 business days</p>
						</div>

						<div className="feature-mini-grid">
							<div>High Efficiency</div>
							<div>Low Noise</div>
							<div>High Torque</div>
							<div>Long Life</div>
						</div>

						<div className="purchase-section">

							<div className="qty-box">
								<button
									onClick={() =>
										setQty(
											Math.max(
												1,
												qty - 1
											)
										)
									}
								>
									<Minus size={16} />
								</button>

								<span>{qty}</span>

								<button
									onClick={() =>
										setQty(qty + 1)
									}
								>
									<Plus size={16} />
								</button>
							</div>

							<button
								className="add-cart-btn"
								onClick={handleAddToCart}
							>
								<ShoppingCart size={17} />
								Add to Cart
							</button>

						</div>

						<button
							className="buy-now-btn"
							onClick={handleBuyNow}
						>
							Buy Now
						</button>

						<div className="wishlist-row">
							<div>
								<Heart size={16} />
								Add to Wishlist
							</div>
						</div>

					</div>
				</div>

				{/* TRUST */}
				<div className="trust-strip">
					<div className="trust-item">
						<Truck size={20} />
						<div>
							<h4>Free Delivery</h4>
							<p>Orders above ₹999</p>
						</div>
					</div>

					<div className="trust-item">
						<ShieldCheck size={20} />
						<div>
							<h4>Secure Payment</h4>
							<p>Protected checkout</p>
						</div>
					</div>

					<div className="trust-item">
						<BadgeCheck size={20} />
						<div>
							<h4>Warranty</h4>
							<p>1 year coverage</p>
						</div>
					</div>

					<div className="trust-item">
						<Headphones size={20} />
						<div>
							<h4>Expert Support</h4>
							<p>Technical help</p>
						</div>
					</div>
				</div>

				{/* TABS */}
				<div className="tabs-section">
					<div className="tab-buttons">
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
								activeTab === "specifications"
									? "active-tab"
									: ""
							}
							onClick={() =>
								setActiveTab("specifications")
							}
						>
							Specifications
						</button>
					</div>

					<div className="tab-content">
						{activeTab ===
							"description" && (
							<p>{product.description}</p>
						)}

						{activeTab ===
							"specifications" && (
							<div className="spec-table">



								{product.specs?.map((spec, i) => {
								const [label, value] = spec.split(":");

								return (
									<div key={i} className="spec-row">
									<span className="spec-label">{label}</span>
									<span className="spec-value">{value}</span>
									</div>
								);
								})}
							</div>
						)}
					</div>
				</div>

				{/* REVIEWS */}
				<div className="reviews-section">

					<div className="reviews-left">
						<h2>Customer Reviews</h2>
						<div className="rating-big">4.8</div>

						<div className="stars big">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									size={18}
									fill="#f5b301"
									stroke="#f5b301"
								/>
							))}
						</div>

						<p>
							Based on {reviews.length} reviews
						</p>

						<button
							className="write-review-btn"
							onClick={() =>
								setReviewModalOpen(true)
							}
						>
							Write a Review
						</button>
					</div>

					<div className="reviews-right">
						{visibleReviews.map((review) => (
							<div
								key={review._id}
								className="review-card"
							>
								<h4>{review.name}</h4>

								<div className="review-stars">
									{[
										...Array(
											review.rating
										),
									].map((_, i) => (
										<Star
											key={i}
											size={13}
											fill="#f5b301"
											stroke="#f5b301"
										/>
									))}
								</div>

								<h5>{review.title}</h5>
								<p>{review.text}</p>
							</div>
						))}

						<button
							className="toggle-reviews-btn"
							onClick={() =>
								setShowAllReviews(
									!showAllReviews
								)
							}
						>
							{showAllReviews
								? "Show Less"
								: "View All Reviews"}
						</button>
					</div>

				</div>

				<ReviewModal
					isOpen={reviewModalOpen}
					onClose={() =>
						setReviewModalOpen(false)
					}
				/>
			</div>
		</div>
	);
}