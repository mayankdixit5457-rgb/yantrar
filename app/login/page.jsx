"use client";
import { useState } from "react";
import { useUser } from "@/context/AuthContext";
import Link from "next/link";
import "@/app/styles/Auth.css";

export default function LoginPage() {
	const { login } = useUser();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await login(email, password);
		} catch (err) {
			setError(err.message || "Invalid email or password");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="auth-container solo-page">
			<div className="auth-card">
				<div className="auth-header">
					<h1>Welcome Back</h1>
					<p>Please enter your details to sign in</p>
				</div>

				{error && <div className="auth-error">{error}</div>}

				<form onSubmit={handleLogin}>
					<div className="form-group">
						<label htmlFor="email">Email Address</label>
						<input id="email" type="email" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
					</div>
					<button className="auth-btn primary" type="submit" disabled={loading}>
						{loading ? "Signing in..." : "Sign In"}
					</button>
				</form>

				<div className="auth-divider">
					<span>OR</span>
				</div>

				<div className="auth-footer">
					<p>Don&apos;t have an account?</p>
					<Link href="/signup" className="signup-link">
						Create an account for free
					</Link>
				</div>
			</div>
		</div>
	);
}