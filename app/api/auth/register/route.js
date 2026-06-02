import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { resend } from "@/lib/resend";
import { signToken, setAuthCookie } from "@/lib/auth";

export async function POST(request) {
	try {
		const { name, email, password } = await request.json();

		if (!name || !email || !password) {
			return NextResponse.json({ error: "Name, email and password are required" }, { status: 400 });
		}

		if (password.length < 6) {
			return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
		}

		await connectDB();

		const existing = await User.findOne({ email: email.toLowerCase().trim() });
		if (existing) {
			return NextResponse.json({ error: "Email already registered" }, { status: 409 });
		}

		const user = await User.create({ name, email, password });



			try {
				await resend.emails.send({
					from: "Yantrar <info@yantrar.com>",
					to: user.email,
					subject: "Welcome to Yantrar 🚀",
					html: `
						<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">
							<h2>Welcome to Yantrar, ${user.name}!</h2>

							<p>Your account has been created successfully.</p>

							<p>You can now explore our products and services.</p>

							<p>
								<strong>Email:</strong> ${user.email}
							</p>

							<br>

							<p>Thank you for joining Yantrar.</p>

							<p>
								Team Yantrar<br>
								info@yantrar.com
							</p>
						</div>
					`,
				});
			} catch (mailError) {
				console.error("Welcome Email Error:", mailError);
			}
		const token = signToken({ id: user._id, email: user.email, role: user.role, name: user.name });

		const res = NextResponse.json(
			{ message: "Account created successfully", user: { id: user._id, name: user.name, email: user.email, role: user.role } },
			{ status: 201 },
		);
		setAuthCookie(res, token);
		return res;
	} catch (error) {
		console.error("Register error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
