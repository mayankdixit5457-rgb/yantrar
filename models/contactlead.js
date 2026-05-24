import mongoose from "mongoose";

const ContactLeadSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		company: {
			type: String,
			default: "",
			trim: true,
		},
		phone: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
		},
		service: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
			trim: true,
		},
		status: {
			type: String,
			default: "new",
		},
		source: {
			type: String,
			default: "website_contact",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.models.ContactLead ||
	mongoose.model("ContactLead", ContactLeadSchema);