"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./YouMayAlsoLike.css";

export default function YouMayAlsoLike({ currentSlug }) {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	useEffect(() => {
		fetch("/api/products")
			.then((r) => r.json())
			.then((data) => {
				const filtered = (data.products || []).filter((p) => p.slug !== currentSlug).slice(0, 6);
				setProducts(filtered);
			});
	}, [currentSlug]);

	if (products.length === 0) {
		return (
			<section className="also-like">
				<h2>You May Also Like</h2>
				<p>No recommendations available.</p>
			</section>
		);
	}

	return (
		<section className="also-like">
			<h2>You May Also Like</h2>
			<div className="also-grid">
				{products.map((item) => (
					<div key={item._id} className="also-card" onClick={() => router.push(`/product/${item.slug}`)}>
						<img src={item.images?.[0]} alt={item.name} />
						<h3>{item.name}</h3>
						<p className="price">₹{item.price}</p>
					</div>
				))}
			</div>
		</section>
	);
}
