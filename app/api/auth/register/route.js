import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
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
