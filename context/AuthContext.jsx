"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function useUser() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	async function init() {
		try {
			const res = await fetch("/api/auth/me");
			const data = await res.json();
			setUser(data.user || null);
		} catch {
			setUser(null);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		init();
	}, []);

	async function login(email, password) {
		const res = await fetch("/api/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});
		const data = await res.json();
		if (!res.ok) throw new Error(data.error || "Login failed");
		setUser(data.user);
		router.push("/");
	}

	async function register(email, password, name) {
		const res = await fetch("/api/auth/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, password }),
		});
		const data = await res.json();
		if (!res.ok) throw new Error(data.error || "Registration failed");
		setUser(data.user);
		router.push("/");
	}

	async function logout() {
		await fetch("/api/auth/logout", { method: "POST" });
		setUser(null);
		router.push("/");
	}

	return <AuthContext.Provider value={{ current: user, loading, login, logout, register }}>{children}</AuthContext.Provider>;
}
