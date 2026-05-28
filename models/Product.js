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







		reviews: [
			{
				name: {
					type: String,
					required: true,
					trim: true,
				},

				rating: {
					type: Number,
					required: true,
					min: 1,
					max: 5,
				},

				title: {
					type: String,
					required: true,
					trim: true,
				},

				text: {
					type: String,
					required: true,
					trim: true,
				},

				createdAt: {
					type: Date,
					default: Date.now,
				},
			},
		],


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