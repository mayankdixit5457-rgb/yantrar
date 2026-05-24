import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
	{
		orderId: { type: String, required: true, unique: true },
		name: { type: String, required: true },
		email: { type: String, required: true },
		phone: { type: String, required: true },
		address: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		pincode: { type: String, required: true },
		products: { type: String, required: true },
		amount: { type: Number, required: true },
		paymentId: { type: String, default: "" },
		status: {
			type: String,
			enum: ["pending", "paid", "processing", "shipped", "delivered", "cancelled"],
			default: "pending",
		},
	},
	{ timestamps: true },
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
