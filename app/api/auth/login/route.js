import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { signToken, setAuthCookie } from "@/lib/auth";

export async function POST(request) {
	try {
		const { email, password } = await request.json();

		if (!email || !password) {
			return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
		}

		await connectDB();

		const user = await User.findOne({ email: email.toLowerCase().trim() });
		if (!user) {
			return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
		}

		const valid = await user.comparePassword(password);
		if (!valid) {
			return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
		}

		const token = signToken({ id: user._id, email: user.email, role: user.role, name: user.name });

		const res = NextResponse.json({ user: { id: user._id, name: user.name, email: user.email, role: user.role } }, { status: 200 });
		setAuthCookie(res, token);
		return res;
	} catch (error) {
		console.error("Login error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
