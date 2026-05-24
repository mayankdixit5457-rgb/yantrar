"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./Categories.css";

export default function Categories() {
	const router = useRouter();
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("/api/categories")
			.then((r) => r.json())
			.then((data) => setCategories(data.categories || []));
	}, []);
	

	return (
		<section className="categories" id="categories">
			<div className="section-label">BROWSE</div>
			<h2>Shop by Category</h2>
			<p className="section-sub">Find the perfect drone for your mission</p>

			<div className="categories-grid">
				{categories.map((cat) => (
					<div
						key={cat._id}
						className="category-card"
						onClick={() => router.push(`/category/${cat.slug}`)}
					>
						<img src={cat.image} alt={cat.name} />

						<div className="category-overlay"></div>

						<div className="category-content">
							<h3>{cat.name}</h3>
							<span className="category-arrow">→</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}