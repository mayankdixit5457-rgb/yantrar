"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CartContext } from "@/context/CartContext";
import { useUser } from "@/context/AuthContext";

import CartDrawer from "./CartDrawer";

import "./Header.css";

export default function Header() {

	const pathname = usePathname();

	const [menuOpen, setMenuOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const { cart } = useContext(CartContext);

	const { current: user, logout } = useUser();

	const cartCount = cart.reduce(
		(total, item) => total + item.quantity,
		0
	);

	/* ACTIVE LINK */
	const isActive = (path) => {

		if (path === "/") {
			return pathname === "/";
		}

		return pathname.startsWith(path);
	};

	/* SCROLL EFFECT */
	useEffect(() => {

		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};

	}, []);

	/* CLOSE MOBILE MENU ON PAGE CHANGE */
	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	return (

		<>

			<header
				className={`header ${
					scrolled ? "header-scrolled" : ""
				}`}
			>

				<div className="header-container">

					{/* LOGO */}
					<Link href="/" className="logo">

						<img
							src="/logo/logo.png"
							className="logo-icon"
							alt="logo"
						/>

						<img
							src="/logo/text.png"
							className="logo-text"
							alt="Yantrar"
						/>

					</Link>


					{/* NAVIGATION */}
					<nav
						className={`nav-menu ${
							menuOpen ? "open" : ""
						}`}
					>

						<ul className="nav-links">

							{/* HOME */}
							<li>

								<Link
									href="/"
									className={
										isActive("/")
											? "active"
											: ""
									}
								>
									Home
								</Link>

							</li>


							{/* SERVICES */}
							<li>

								<Link
									href="/services"
									className={
										isActive("/services")
											? "active"
											: ""
									}
								>
									Services
								</Link>

							</li>


							{/* PRODUCTS */}
							<li className="dropdown">
								
								<Link
									href="/#categories"
									className={
										isActive("/category/drones") ||
										isActive("/category/rc-planes")
											? "active"
											: ""
									}
								>
									Products
								</Link>

								<div className="dropdown-menu">

									<Link href="/category/drones">
										Drones
									</Link>

									<Link href="/category/rc-planes">
										RC Planes
									</Link>

								</div>

							</li>


							{/* COMPONENTS */}
							<li className="dropdown">

								<Link
									href="/category/components"
									className={
										isActive("/category/components")
											? "active"
											: ""
									}
								>
									Components
								</Link>

								<div className="dropdown-menu">

									<Link href="/category/components">
										All Components
									</Link>

								</div>

							</li>


							{/* BLOG */}
							<li>

								<Link
									href="/blog"
									className={
										isActive("/blog")
											? "active"
											: ""
									}
								>
									Blog
								</Link>

							</li>


							{/* ABOUT */}
							<li>

								<Link
									href="/about"
									className={
										isActive("/about")
											? "active"
											: ""
									}
								>
									About
								</Link>

							</li>


							{/* CONTACT */}
							<li>

								<Link
									href="/contact"
									className={
										isActive("/contact")
											? "active"
											: ""
									}
								>
									Contact
								</Link>

							</li>


							{/* MOBILE TRACK ORDER */}
							<li className="mobile-only">

								<Link href="/track-order">
									Track Order
								</Link>

							</li>

						</ul>

					</nav>


					{/* RIGHT SIDE */}
					<div className="header-actions">

						{/* TRACK ORDER */}
						<Link
							href="/track-order"
							className="track-btn"
						>
							Track Order
						</Link>


						{/* LOGIN / LOGOUT */}
						{user ? (

							<button
								className="login-btn"
								onClick={logout}
							>
								Logout
							</button>

						) : (

							<Link
								href="/login"
								className="login-btn"
							>
								Login
							</Link>

						)}


						{/* CART */}
						<button
							className="cart-btn"
							onClick={() => setCartOpen(true)}
						>

							🛒

							{cartCount > 0 && (

								<span className="cart-count">
									{cartCount}
								</span>

							)}

						</button>


						{/* MOBILE MENU */}
						<button
							className={`hamburger ${
								menuOpen ? "active" : ""
							}`}
							onClick={() =>
								setMenuOpen(!menuOpen)
							}
							aria-label="Menu"
						>

							<span></span>
							<span></span>
							<span></span>

						</button>

					</div>

				</div>

			</header>


			{/* CART DRAWER */}
			<CartDrawer
				isOpen={cartOpen}
				closeCart={() => setCartOpen(false)}
			/>

		</>
	);
}