import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function GET() {
	try {
		const data = await resend.emails.send({
			from: "Yantrar <info@yantrar.com>",
			to: "mayankdixit1221@gmail.com",
			subject: "Yantrar Test Email",
			html: `
				<h2>Success 🎉</h2>
				<p>Resend is connected successfully with Yantrar.</p>
			`,
		});

		return NextResponse.json({
			success: true,
			data,
		});
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{
				success: false,
				error,
			},
			{ status: 500 }
		);
	}
}