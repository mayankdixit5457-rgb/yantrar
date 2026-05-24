"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/AuthContext";

export default function AdminUsersPage() {
	const { current: authUser } = useUser();
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	const loadUsers = () => {
		fetch("/api/users")
			.then((r) => r.json())
			.then((d) => {
				setUsers(d.users || []);
				setLoading(false);
			});
	};

	useEffect(() => {
		loadUsers();
	}, []);

	const handleRoleToggle = async (u) => {
		const newRole = u.role === "admin" ? "user" : "admin";
		if (!confirm(`Change "${u.name}" to role: ${newRole}?`)) return;
		const res = await fetch(`/api/users/${u._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ role: newRole }),
		});
		const data = await res.json();
		if (!res.ok) return alert(data.error);
		loadUsers();
	};

	const handleDelete = async (u) => {
		if (!confirm(`Permanently delete "${u.name}" (${u.email})?`)) return;
		const res = await fetch(`/api/users/${u._id}`, { method: "DELETE" });
		const data = await res.json();
		if (!res.ok) return alert(data.error);
		loadUsers();
	};

	if (loading)
		return (
			<div className="admin-users-page">
				<p>Loading...</p>
			</div>
		);

	return (
		<div className="admin-users-page">
			<h1>
				Users <span className="users-count">({users.length})</span>
			</h1>

			<table className="users-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Joined</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((u) => {
						const isSelf = String(u._id) === String(authUser?.id);
						return (
							<tr key={u._id}>
								<td>
									<div className="user-name-cell">
										<span className="user-avatar-sm">{u.name?.[0]?.toUpperCase()}</span>
										<strong>{u.name}</strong>
										{isSelf && <span className="badge-you">You</span>}
									</div>
								</td>
								<td>{u.email}</td>
								<td>
									<span className={u.role === "admin" ? "badge-admin" : "badge-user"}>{u.role}</span>
								</td>
								<td>{new Date(u.createdAt).toLocaleDateString("en-IN")}</td>
								<td>
									{isSelf ? (
										<span className="text-muted">—</span>
									) : (
										<div className="table-actions">
											<button className="btn-edit" onClick={() => handleRoleToggle(u)}>
												{u.role === "admin" ? "Demote" : "Make Admin"}
											</button>
											<button className="btn-delete" onClick={() => handleDelete(u)}>
												Delete
											</button>
										</div>
									)}
								</td>
							</tr>
						);
					})}
					{users.length === 0 && (
						<tr>
							<td colSpan={5} style={{ textAlign: "center", color: "#999", padding: "32px" }}>
								No users found.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
