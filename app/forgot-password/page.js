"use client";

import { useState } from "react";
import Link from "next/link";
import "@/app/styles/Auth.css";

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		setMessage("");

		try {
			const res = await fetch("/api/forgot-password", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await res.json();

			setMessage(
				data.message ||
					"If an account exists, a reset link has been sent."
			);
		} catch (error) {
			setMessage("Something went wrong.");
		}

		setLoading(false);
	};

return (
	<div className="auth-container solo-page">
		<div className="auth-card">
			<div className="auth-header">
				<h1>Forgot Password?</h1>

				<p>
					Enter your registered email address and we'll send
					you a secure password reset link.
				</p>
			</div>

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="email">
						Email Address
					</label>

					<input
						id="email"
						type="email"
						placeholder="name@example.com"
						value={email}
						onChange={(e) =>
							setEmail(e.target.value)
						}
						required
					/>
				</div>

				<button
					className="auth-btn primary"
					type="submit"
					disabled={loading}
				>
					{loading
						? "Sending..."
						: "Send Password Reset Link"}
				</button>
			</form>

			{message && (
				<div className="auth-success">
					{message}
				</div>
			)}

			<div className="auth-footer">
				<Link
					href="/login"
					className="signup-link"
				>
					← Back to Login
				</Link>
			</div>
		</div>
	</div>
);

}