import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { getAuthUser } from "@/lib/auth";

// PUT /api/users/[id] — change role (admin only, cannot change own role)
export async function PUT(request, { params }) {
	try {
		const authUser = await getAuthUser();
		if (!authUser || authUser.role !== "admin") {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		if (String(params.id) === String(authUser.id)) {
			return NextResponse.json({ error: "Cannot change your own role" }, { status: 400 });
		}

		const { role } = await request.json();
		if (!["user", "admin"].includes(role)) {
			return NextResponse.json({ error: "Invalid role — must be 'user' or 'admin'" }, { status: 400 });
		}

		await connectDB();
		const user = await User.findByIdAndUpdate(params.id, { role }, { new: true, runValidators: true }).select("-password");

		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		return NextResponse.json({ user }, { status: 200 });
	} catch (error) {
		console.error("Users PUT error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}

// DELETE /api/users/[id] — delete a user (admin only, cannot delete self)
export async function DELETE(request, { params }) {
	try {
		const authUser = await getAuthUser();
		if (!authUser || authUser.role !== "admin") {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		if (String(params.id) === String(authUser.id)) {
			return NextResponse.json({ error: "Cannot delete your own account" }, { status: 400 });
		}

		await connectDB();
		const user = await User.findByIdAndDelete(params.id);
		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		return NextResponse.json({ message: "User deleted" }, { status: 200 });
	} catch (error) {
		console.error("Users DELETE error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
