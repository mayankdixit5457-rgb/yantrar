"use client";
import { useEffect } from "react";
import { useUser } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import "./admin.css";

const NAV = [
	{ href: "/admin", label: "Dashboard", icon: "🏠" },
	{ href: "/admin/products", label: "Products", icon: "📦" },
	{ href: "/admin/orders", label: "Orders", icon: "🛒" },
	{ href: "/admin/users", label: "Users", icon: "👥" },
];

export default function AdminLayout({ children }) {
	const { current: user, loading, logout } = useUser();
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (!loading && (!user || user.role !== "admin")) {
			router.push("/login");
		}
	}, [user, loading, router]);

	if (loading) {
		return (
			<div className="admin-loading">
				<p>Loading...</p>
			</div>
		);
	}

	if (!user || user.role !== "admin") return null;

	return (
		<div className="admin-layout">
			<aside className="admin-sidebar">
				<div className="sidebar-brand">
					<img src="/logo.jpeg" alt="Logo" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
					<span>Yantrar Admin</span>
				</div>

				<nav className="sidebar-nav">
					{NAV.map((item) => (
						<Link key={item.href} href={item.href} className={`sidebar-link ${pathname === item.href ? "active" : ""}`}>
							<span className="sidebar-icon">{item.icon}</span>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="sidebar-footer">
					<div className="sidebar-user">
						<span className="sidebar-avatar">{user.name?.[0]?.toUpperCase()}</span>
						<div>
							<p className="sidebar-name">{user.name}</p>
							<p className="sidebar-role">Administrator</p>
						</div>
					</div>
					<button className="sidebar-logout" onClick={logout}>
						Sign out
					</button>
				</div>
			</aside>

			<div className="admin-main">{children}</div>
		</div>
	);
}
