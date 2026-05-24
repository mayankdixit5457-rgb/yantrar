"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/AuthContext";
import Link from "next/link";
import "./admin.css";

export default function AdminDashboard() {
	const { current: user } = useUser();
	const [stats, setStats] = useState({ products: 0, orders: 0, users: 0 });

	useEffect(() => {
		Promise.all([fetch("/api/products").then((r) => r.json()), fetch("/api/orders").then((r) => r.json()), fetch("/api/users").then((r) => r.json())]).then(
			([pd, od, ud]) => {
				setStats({
					products: pd.products?.length || 0,
					orders: od.orders?.length || 0,
					users: ud.users?.length || 0,
				});
			},
		);
	}, []);

	return (
		<div className="admin-page">
			<div className="admin-header">
				<h1>Admin Dashboard</h1>
				<p>Welcome back, {user?.name}</p>
			</div>

			<div className="admin-stats">
				<div className="stat-card">
					<span className="stat-icon">📦</span>
					<div>
						<h3>{stats.products}</h3>
						<p>Total Products</p>
					</div>
				</div>
				<div className="stat-card">
					<span className="stat-icon">🛒</span>
					<div>
						<h3>{stats.orders}</h3>
						<p>Total Orders</p>
					</div>
				</div>
				<div className="stat-card">
					<span className="stat-icon">👥</span>
					<div>
						<h3>{stats.users}</h3>
						<p>Total Users</p>
					</div>
				</div>
			</div>

			<div className="admin-nav">
				<Link href="/admin/products" className="admin-nav-card">
					<span>📦</span>
					<h3>Manage Products</h3>
					<p>Add, edit, or delete products</p>
				</Link>
				<Link href="/admin/orders" className="admin-nav-card">
					<span>🛒</span>
					<h3>Manage Orders</h3>
					<p>View and update order statuses</p>
				</Link>
				<Link href="/admin/users" className="admin-nav-card">
					<span>👥</span>
					<h3>Manage Users</h3>
					<p>View and manage user roles</p>
				</Link>
			</div>
		</div>
	);
}
