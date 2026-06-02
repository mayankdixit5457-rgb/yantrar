import { NextResponse } from "next/server";
import crypto from "crypto";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { resend } from "@/lib/resend";

export async function POST(request) {
	try {
		const { email } = await request.json();

		if (!email) {
			return NextResponse.json(
				{ error: "Email is required" },
				{ status: 400 }
			);
		}

		await connectDB();

		const user = await User.findOne({
			email: email.toLowerCase().trim(),
		});

		// Security: user exists ya nahi batana nahi hai
		if (!user) {
			return NextResponse.json({
				message:
					"If an account exists, a reset link has been sent.",
			});
		}

		const resetToken = crypto.randomBytes(32).toString("hex");

		user.resetPasswordToken = resetToken;

		user.resetPasswordExpires =
			new Date(Date.now() + 1000 * 60 * 30); // 30 min

		await user.save();

		console.log("TOKEN GENERATED:", resetToken);

		console.log("TOKEN GENERATED:", resetToken);

		const savedUser = await User.findOne({
			email: user.email,
		});

		console.log(savedUser);
		const resetUrl =
			`${process.env.NEXT_PUBLIC_SITE_URL}/reset-password/${resetToken}`;

		await resend.emails.send({
			from: "Yantrar <info@yantrar.com>",
			to: user.email,
			subject: "Reset Your Yantrar Password",
			html: `
				<h2>Password Reset Request</h2>

				<p>Hello ${user.name},</p>

				<p>Click the button below to reset your password.</p>

				<p>
					<a href="${resetUrl}"
					   style="
						background:#0ea5e9;
						color:white;
						padding:12px 20px;
						text-decoration:none;
						border-radius:6px;
					   ">
						Reset Password
					</a>
				</p>

				<p>This link expires in 30 minutes.</p>

				<p>If you didn't request this, ignore this email.</p>
			`,
		});

		return NextResponse.json({
			message:
				"If an account exists, a reset link has been sent.",
		});
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{ error: "Server error" },
			{ status: 500 }
		);
	}
}