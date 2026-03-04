import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useUser } from "../lib/context/user";
import { Link } from "react-router-dom";

import CartDrawer from "../components/CartDrawer";
import "./Header.css";


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { cart } = useContext(CartContext);
  const { current: user, logout } = useUser();



  // ⭐ Calculate total cart quantity
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <header className="header">

        <div className="header-container">

          {/* LOGO */}
          <div className="logo">
            XYZ<span>.</span>
          </div>

          {/* NAVIGATION */}
          <nav className={`nav-menu ${menuOpen ? "is-open" : ""}`}>

            <ul className="nav-links">

              <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
              </li>

              <li>
                <a href="#shop" onClick={() => setMenuOpen(false)}>
                  Shop
                </a>
              </li>

              <li>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>

            </ul>

            {/* MOBILE BUTTONS */}
            <div className="mobile-only-actions">

              {user ? (
                <button className="btn-secondary" onClick={logout}>
                   Logout ({user.name})
                </button>
              ) : (
                <Link to="/login" className="btn-secondary" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              )}


              <button
                className="btn-primary"
                onClick={() => setCartOpen(true)}
              >
                Cart ({cartCount})
              </button>

            </div>

          </nav>

          {/* HEADER ACTIONS */}
          <div className="header-actions">

            <button
              className="icon-btn cart-btn"
              onClick={() => setCartOpen(true)}
            >
              <span className="cart-icon">🛒</span>

              {cartCount > 0 && (
                <span className="cart-count">
                  {cartCount}
                </span>
              )}

            </button>

            {user ? (
              <button className="account-link" onClick={logout}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="account-link">
                Login
              </Link>
            )}


            <button
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>

          </div>

        </div>

        {menuOpen && (
          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

      </header>

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={cartOpen}
        closeCart={() => setCartOpen(false)}
      />

    </>
  );
};

export default Header;