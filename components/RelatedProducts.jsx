"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./RelatedProducts.css";

export default function RelatedProducts({ category, currentSlug }) {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	useEffect(() => {
		if (!category) return;
		fetch(`/api/products?category=${encodeURIComponent(category)}`)
			.then((r) => r.json())
			.then((data) => {
				const filtered = (data.products || []).filter((p) => p.slug !== currentSlug).slice(0, 4);
				setProducts(filtered);
			});
	}, [category, currentSlug]);

	if (products.length === 0) {
		return (
			<section className="related-products">
				<h2>Related Products</h2>
				<p style={{ color: "#aaa", textAlign: "center" }}>No related products found.</p>
			</section>
		);
	}

	return (
		<section className="related-products">
			<h2>Related Products</h2>
			<div className="related-grid">
				{products.map((item) => (
					<div key={item._id} className="related-card" onClick={() => router.push(`/product/${item.slug}`)}>
						<img src={item.images?.[0]} alt={item.name} />
						<h3>{item.name}</h3>
						<p className="price">₹{item.price}</p>
					</div>
				))}
			</div>
		</section>
	);
}
