import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},

		slug: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},

		category: {
			type: String,
			required: true,
			trim: true,
		},

		price: {
			type: Number,
			required: true,
			min: 0,
		},

		images: {
			type: [String],
			default: [],
		},

		shortDescription: {
			type: String,
			trim: true,
		},

		description: {
			type: String,
			trim: true,
		},

		specifications: {
			type: String,
			trim: true,
		},

		specs: {
			type: [String],
			default: [],
		},

		featured: {
			type: Boolean,
			default: false,
		},

		serviceShowcase: {
			type: Boolean,
			default: false,
		},

		inStock: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.models.Product ||
	mongoose.model("Product", ProductSchema);