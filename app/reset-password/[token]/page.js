"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ResetPasswordPage() {
	const { token } = useParams();
	const router = useRouter();

	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		setMessage("");

		try {
			const res = await fetch("/api/reset-password", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token,
					password,
				}),
			});

			const data = await res.json();

			if (res.ok) {
				setMessage("Password reset successful!");

				setTimeout(() => {
					router.push("/login");
				}, 2000);
			} else {
				setMessage(data.error);
			}
		} catch {
			setMessage("Something went wrong.");
		}

		setLoading(false);
	};

	return (
		<div style={{
			maxWidth: "450px",
			margin: "80px auto",
			padding: "20px"
		}}>
			<h1>Reset Password</h1>

			<form onSubmit={handleSubmit}>
				<input
					type="password"
					placeholder="New Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					minLength={6}
					style={{
						width: "100%",
						padding: "12px",
						marginTop: "20px"
					}}
				/>

				<button
					type="submit"
					disabled={loading}
					style={{
						width: "100%",
						padding: "12px",
						marginTop: "20px"
					}}
				>
					{loading ? "Updating..." : "Reset Password"}
				</button>
			</form>

			{message && (
				<p style={{ marginTop: "20px" }}>
					{message}
				</p>
			)}
		</div>
	);
}