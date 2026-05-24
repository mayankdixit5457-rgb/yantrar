import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { getAuthUser } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
	try {
		const payload = await getAuthUser();
		if (!payload) {
			return NextResponse.json({ user: null }, { status: 200 });
		}

		await connectDB();
		const user = await User.findById(payload.id).select("-password");
		if (!user) {
			return NextResponse.json({ user: null }, { status: 200 });
		}

		return NextResponse.json({ user: { id: user._id, name: user.name, email: user.email, role: user.role } }, { status: 200 });
	} catch (error) {
		console.error("Me error:", error);
		return NextResponse.json({ user: null }, { status: 200 });
	}
}
