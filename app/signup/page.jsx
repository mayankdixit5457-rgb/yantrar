"use client";
import { useState } from "react";
import { useUser } from "@/context/AuthContext";
import Link from "next/link";
import "@/app/styles/Auth.css";

export default function SignupPage() {
	const { register } = useUser();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await register(email, password, name);
		} catch (err) {
			setError(err.message || "Failed to create account");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="auth-container solo-page">
			<div className="auth-card">
				<div className="auth-header">
					<h1>Create Account</h1>
					<p>Join our handcraft community today</p>
				</div>

				{error && <div className="auth-error">{error}</div>}

				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="John Doe" />
					</div>
					<div className="form-group">
						<label>Email Address</label>
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="name@company.com" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" minLength={6} />
					</div>
					<button type="submit" className="auth-btn primary" disabled={loading}>
						{loading ? "Creating..." : "Create Account"}
					</button>
				</form>

				<div className="auth-divider">
					<span>OR</span>
				</div>

				<div className="auth-footer">
					<p>Already have an account?</p>
					<Link href="/login" className="signup-link">
						Login to your account
					</Link>
				</div>
			</div>
		</div>
	);
}
