import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request) {
	try {
		const { token, password } = await request.json();

		if (!token || !password) {
			return NextResponse.json(
				{ error: "Missing data" },
				{ status: 400 }
			);
		}

		await connectDB();

		const user = await User.findOne({
			resetPasswordToken: token,
			resetPasswordExpires: { $gt: new Date() },
		});

		if (!user) {
			return NextResponse.json(
				{ error: "Invalid or expired token" },
				{ status: 400 }
			);
		}

		user.password = password;

		user.resetPasswordToken = null;
		user.resetPasswordExpires = null;

		await user.save();

		return NextResponse.json({
			message: "Password reset successful",
		});
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{ error: "Server error" },
			{ status: 500 }
		);
	}
}