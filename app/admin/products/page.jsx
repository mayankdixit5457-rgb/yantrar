"use client";
import { useEffect, useState } from "react";
import "../admin.css";

const EMPTY_FORM = {
	name: "",
	slug: "",
	category: "",
	price: "",
	images: "",
	shortDescription: "",
	description: "",
	specs: "",
	featured: false,
	inStock: true,
};

export default function AdminProductsPage() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [editingId, setEditingId] = useState(null);
	const [form, setForm] = useState(EMPTY_FORM);
	const [saving, setSaving] = useState(false);
	const [uploading, setUploading] = useState(false);

	const loadProducts = () =>
		fetch("/api/products")
			.then((r) => r.json())
			.then((d) => setProducts(d.products || []));


			


	const loadCategories = () =>
		fetch("/api/categories/all")
			.then((r) => r.json())
			.then((d) => setCategories(d.categories || []));

	useEffect(() => {
		loadProducts();
		loadCategories();
	}, []);

	const openCreate = () => {
		setEditingId(null);
		setForm(EMPTY_FORM);
		setShowModal(true);
	};

	const openEdit = (product) => {
		setEditingId(product._id);
		setForm({
			name: product.name,
			slug: product.slug,
			category: product.category,
			price: product.price,
			images: (product.images || []).join(", "),
			shortDescription: product.shortDescription || "",
			description: product.description || "",
			specs: (product.specs || []).join("\n"),
			featured: product.featured || false,
			inStock: product.inStock !== false,
		});
		setShowModal(true);
	};




	const handleImageUpload = async (files) => {
		setUploading(true);

		try {
			const uploadedUrls = [];

			for (const file of files) {
				const formData = new FormData();
				formData.append("file", file);

				const res = await fetch("/api/upload", {
					method: "POST",
					body: formData,
				});

				const data = await res.json();

				if (data.url) {
					uploadedUrls.push(data.url);
				}
			}

			setForm((prev) => {
				const existing = prev.images
					? prev.images.split(",").map((i) => i.trim()).filter(Boolean)
					: [];

				return {
					...prev,
					images: [...existing, ...uploadedUrls].join(", "),
				};
			});
		} catch (error) {
			alert("Image upload failed");
		} finally {
			setUploading(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this product?")) return;
		await fetch(`/api/products/${id}`, { method: "DELETE" });
		loadProducts();
	};

	const handleSave = async (e) => {
		e.preventDefault();
		setSaving(true);
		const payload = {
			...form,
			price: Number(form.price),
			images: form.images
				.split(",")
				.map((s) => s.trim())
				.filter(Boolean),
			specs: form.specs
				.split("\n")
				.map((s) => s.trim())
				.filter(Boolean),
		};

		const url = editingId ? `/api/products/${editingId}` : "/api/products";
		const method = editingId ? "PUT" : "POST";

		const res = await fetch(url, {
			method,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});
		setSaving(false);

		if (res.ok) {
			setShowModal(false);
			loadProducts();
		} else {
			const data = await res.json();
			alert(data.error || "Failed to save product");
		}
	};

	return (
		<div className="admin-products-page">
			<div className="admin-products-header">
				<h1>Products Management</h1>
				<button className="btn-add" onClick={openCreate}>
					+ Add Product
				</button>
			</div>

			<table className="products-table">
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Category</th>
						<th>Price</th>
						<th>Featured</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.map((p) => (
						<tr key={p._id}>
							<td>{p.images?.[0] && <img src={p.images[0]} alt={p.name} className="product-thumb" />}</td>
							<td>{p.name}</td>
							<td>{p.category}</td>
							<td>₹{p.price}</td>
							<td>{p.featured && <span className="badge-featured">Featured</span>}</td>
							<td>
								<div className="table-actions">
									<button className="btn-edit" onClick={() => openEdit(p)}>
										Edit
									</button>
									<button className="btn-delete" onClick={() => handleDelete(p._id)}>
										Delete
									</button>
								</div>
							</td>
						</tr>
					))}
					{products.length === 0 && (
						<tr>
							<td colSpan={6} style={{ textAlign: "center", color: "#999", padding: "32px" }}>
								No products yet. Add one or seed from dashboard.
							</td>
						</tr>
					)}
				</tbody>
			</table>

			{showModal && (
				<div className="modal-backdrop" onClick={() => setShowModal(false)}>
					<div className="modal-box" onClick={(e) => e.stopPropagation()}>
						<h2>{editingId ? "Edit Product" : "Add Product"}</h2>
						<form onSubmit={handleSave}>
							<div className="form-row">
								<label>Name *</label>
								<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
							</div>
							<div className="form-row">
								<label>Slug * (URL-friendly, e.g. blue-pottery-vase)</label>
								<input
									value={form.slug}
									onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })}
									required
								/>
							</div>
							<div className="form-row">
								<label>Category *</label>
								
								
								<select
									value={form.category}
									onChange={(e) => setForm({ ...form, category: e.target.value })}
									required
								>
									<option value="">Select category</option>

									{categories
										.filter((cat) => !cat.parent)
										.map((parent) => (
											<optgroup key={parent._id} label={parent.name}>
												<option value={parent.slug}>{parent.name}</option>

												{categories
													.filter((child) => child.parent === parent.slug)
													.map((child) => (
														<option key={child._id} value={child.slug}>
															↳ {child.name}
														</option>
													))}
											</optgroup>
										))}
								</select>


							</div>
							<div className="form-row">
								<label>Price (₹) *</label>
								<input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required min="0" />
							</div>
							
							

							<div className="form-row">
								<label>Product Images</label>

								<div className="upload-box">
									<input
										type="file"
										multiple
										accept="image/*"
										onChange={(e) => handleImageUpload(e.target.files)}
									/>

									<p>
										{uploading
											? "Uploading..."
											: "Drag images here or click to upload"}
									</p>
								</div>

								{form.images && (
									<div className="image-preview-grid">
										{form.images
											.split(",")
											.map((img) => img.trim())
											.filter(Boolean)
											.map((img, index) => (
												<div key={index} className="preview-item">
													<img src={img} alt="" />
												</div>
											))}
									</div>
								)}
							</div>


							<div className="form-row">
								<label>Short Description</label>
								<input value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} />
							</div>
							<div className="form-row">
								<label>Full Description</label>
								<textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} />
							</div>
							<div className="form-row">
								<label>Specs (one per line)</label>
								<textarea
									value={form.specs}
									onChange={(e) => setForm({ ...form, specs: e.target.value })}
									rows={3}
									placeholder="Height: 10 inches&#10;Material: Clay"
								/>
							</div>
							<div className="form-check">
								<input
									type="checkbox"
									id="featured"
									checked={form.featured}
									onChange={(e) => setForm({ ...form, featured: e.target.checked })}
								/>
								<label htmlFor="featured">Featured product</label>
							</div>
							<div className="form-check">
								<input type="checkbox" id="inStock" checked={form.inStock} onChange={(e) => setForm({ ...form, inStock: e.target.checked })} />
								<label htmlFor="inStock">In stock</label>
							</div>
							<div className="modal-actions">
								<button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>
									Cancel
								</button>
								<button type="submit" className="btn-save" disabled={saving}>
									{saving ? "Saving..." : "Save Product"}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
