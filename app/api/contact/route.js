import { NextResponse } from "next/server";
import { Resend } from "resend";
import connectDB from "@/lib/mongodb";
import ContactLead from "@/models/ContactLead";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
	try {
		console.log("CONTACT ROUTE HIT");

		await connectDB();

		console.log("MONGO CONNECTED");

		const body = await req.json();

		const { name, company, phone, email, service, message } = body;

		if (!name || !phone || !email || !service || !message) {
			return NextResponse.json(
				{
					success: false,
					message: "Please fill all required fields.",
				},
				{ status: 400 }
			);
		}

		const savedLead = await ContactLead.create({
			name,
			company,
			phone,
			email,
			service,
			message,
		});

		console.log("LEAD SAVED");

		const emailResult = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "mdixit1221@gmail.com",
			subject: "New Yantrar Contact Inquiry",
			html: `
				<h2>New Contact Inquiry</h2>
				<p>Name: ${name}</p>
				<p>Email: ${email}</p>
				<p>Phone: ${phone}</p>
				<p>Service: ${service}</p>
				<p>Message: ${message}</p>
			`,
		});

		console.log("EMAIL SENT", emailResult);

		return NextResponse.json({
			success: true,
			message: "Inquiry submitted successfully.",
		});
	} catch (error) {
		console.error("CONTACT API ERROR:", error);

		return NextResponse.json(
			{
				success: false,
				message: error.message,
			},
			{ status: 500 }
		);
	}
}