import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { getAuthUser } from "@/lib/auth";

// GET /api/users — list all users (admin only)
export async function GET() {
	try {
		const authUser = await getAuthUser();
		if (!authUser || authUser.role !== "admin") {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		await connectDB();
		const users = await User.find().select("-password").sort({ createdAt: -1 });
		return NextResponse.json({ users }, { status: 200 });
	} catch (error) {
		console.error("Users GET error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
