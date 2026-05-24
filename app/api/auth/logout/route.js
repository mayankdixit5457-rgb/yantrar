import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { clearAuthCookie } from "@/lib/auth";

export async function POST() {
	const res = NextResponse.json({ message: "Logged out" }, { status: 200 });
	clearAuthCookie(res);
	return res;
}
