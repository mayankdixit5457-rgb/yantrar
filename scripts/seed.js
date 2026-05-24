/**
 * scripts/seed.js — AeroDrone database seed
 *
 * Usage:
 *   node --env-file=.env.local scripts/seed.js
 *
 * What it does (all operations are idempotent / upsert-safe):
 *   1. Creates the admin user from ADMIN_NAME / ADMIN_EMAIL / ADMIN_PASSWORD
 *   2. Upserts all 6 drone categories
 *   3. Upserts all products from data/products.json
 *
 * Required env vars (in .env.local):
 *   MONGODB_URI     — e.g. mongodb://localhost:27017/aerodrone
 *   ADMIN_NAME      — e.g. Admin
 *   ADMIN_EMAIL     — e.g. admin@aerodrone.com
 *   ADMIN_PASSWORD  — e.g. admin123   (min 6 chars)
 */

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Load products data ────────────────────────────────────────────────────────
const products = JSON.parse(readFileSync(join(__dirname, "../data/products.json"), "utf-8"));

// ── Seed data ─────────────────────────────────────────────────────────────────
const CATEGORIES = [
	{
		name: "Camera Drones",
		slug: "camera-drones",
		image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400",
		order: 1,
	},
	{
		name: "Racing Drones",
		slug: "racing-drones",
		image: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=400",
		order: 2,
	},
	{
		name: "Industrial Drones",
		slug: "industrial-drones",
		image: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=400",
		order: 3,
	},
	{
		name: "Drone Parts",
		slug: "drone-parts",
		image: "https://images.unsplash.com/photo-1506947411487-a56738b4430a?w=400",
		order: 4,
	},
	{
		name: "Drone Accessories",
		slug: "drone-accessories",
		image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400",
		order: 5,
	},
	{
		name: "Drone Kits",
		slug: "drone-kits",
		image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400",
		order: 6,
	},
];

// ── Inline schemas (avoids Next.js @/ alias, no extra tooling needed) ─────────
const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		email: { type: String, required: true, unique: true, lowercase: true, trim: true },
		password: { type: String, required: true, minlength: 6 },
		role: { type: String, enum: ["user", "admin"], default: "user" },
	},
	{ timestamps: true },
);

const CategorySchema = new mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
		image: { type: String, default: "" },
		order: { type: Number, default: 0 },
	},
	{ timestamps: true },
);

const ProductSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		slug: { type: String, required: true, unique: true, lowercase: true },
		category: { type: String, required: true, trim: true },
		price: { type: Number, required: true, min: 0 },
		images: { type: [String], default: [] },
		shortDescription: { type: String, trim: true },
		description: { type: String, trim: true },
		specs: { type: [String], default: [] },
		featured: { type: Boolean, default: false },
		inStock: { type: Boolean, default: true },
	},
	{ timestamps: true },
);

// ── Helpers ───────────────────────────────────────────────────────────────────
function log(label, msg) {
	const icons = { ok: "✅", skip: "⏭ ", info: "ℹ️ ", err: "❌" };
	console.log(`  ${icons[label] ?? "  "} ${msg}`);
}

async function seedAdmin(User) {
	const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

	if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
		log("skip", "Admin — set ADMIN_EMAIL and ADMIN_PASSWORD in .env.local");
		return;
	}
	if (ADMIN_PASSWORD.length < 6) {
		log("err", "ADMIN_PASSWORD must be at least 6 characters");
		process.exit(1);
	}

	const email = ADMIN_EMAIL.toLowerCase().trim();
	const existing = await User.findOne({ email });

	if (existing) {
		if (existing.role !== "admin") {
			await User.updateOne({ _id: existing._id }, { $set: { role: "admin" } });
			log("ok", `Admin — promoted ${email} to admin`);
		} else {
			log("skip", `Admin — ${email} already exists as admin`);
		}
		return;
	}

	const hashed = await bcrypt.hash(ADMIN_PASSWORD, 12);
	await User.create({ name: ADMIN_NAME || "Admin", email, password: hashed, role: "admin" });
	log("ok", `Admin — created ${email}`);
}

async function seedCategories(Category) {
	let created = 0;
	let updated = 0;
	for (const cat of CATEGORIES) {
		const result = await Category.findOneAndUpdate({ slug: cat.slug }, cat, {
			upsert: true,
			new: true,
			setDefaultsOnInsert: true,
		});
		if (result.createdAt?.getTime() === result.updatedAt?.getTime()) created++;
		else updated++;
	}
	log("ok", `Categories — ${created} created, ${updated} updated (total ${CATEGORIES.length})`);
}

async function seedProducts(Product) {
	let created = 0;
	let updated = 0;
	for (const p of products) {
		const doc = {
			name: p.name,
			slug: p.slug,
			category: p.category,
			price: p.price,
			images: p.images || [],
			shortDescription: p.shortDescription || "",
			description: p.description || "",
			specs: p.specs || [],
			featured: p.featured || false,
			inStock: true,
		};
		const existing = await Product.findOne({ slug: p.slug });
		if (existing) {
			await Product.updateOne({ slug: p.slug }, { $set: doc });
			updated++;
		} else {
			await Product.create(doc);
			created++;
		}
	}
	log("ok", `Products — ${created} created, ${updated} updated (total ${products.length})`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
	const uri = process.env.MONGODB_URI;
	if (!uri) {
		console.error("❌  MONGODB_URI is not set. Run: node --env-file=.env.local scripts/seed.js");
		process.exit(1);
	}

	console.log("\n🚀  AeroDrone — Database Seed");
	console.log("────────────────────────────");
	console.log(`  DB: ${uri}\n`);

	await mongoose.connect(uri);

	// Get or register models (safe for re-runs)
	const User = mongoose.models.User || mongoose.model("User", UserSchema);
	const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);
	const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

	await seedAdmin(User);
	await seedCategories(Category);
	await seedProducts(Product);

	// Print final counts
	const [users, admins, cats, prods] = await Promise.all([
		User.countDocuments(),
		User.countDocuments({ role: "admin" }),
		Category.countDocuments(),
		Product.countDocuments(),
	]);

	console.log("\n📊  Final DB counts:");
	console.log(`     Users: ${users}  (admins: ${admins})`);
	console.log(`     Categories: ${cats}`);
	console.log(`     Products: ${prods}`);
	console.log("\n✔   Seed complete.\n");

	await mongoose.disconnect();
}

main().catch((err) => {
	console.error("❌  Seed failed:", err.message);
	process.exit(1);
});
