"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then((data) => setCategories(data.categories || []));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/logo/logo.png"
              className="footer-logo-icon"
              alt="Yantrar Logo"
            />
            <img
              src="/logo/text.png"
              className="footer-logo-text"
              alt="Yantrar"
            />
          </div>

          <p>
            Engineering intelligent drones, aerial systems, and next-generation
            autonomous technology for modern missions.
          </p>

          <div className="footer-trust">
            <span>✔ Secure Payments</span>
            <span>✔ 2-Year Warranty</span>
            <span>✔ Tested & Certified</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/track-order">Track Order</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4>Products</h4>
          <ul>
            {categories.map((cat) => (
              <li key={cat._id}>
                <Link href={`/category/${cat.slug}`}>{cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4>Contact</h4>

          <p className="footer-contact-item">
            <FiMail />
            <a href="mailto:info@yantrar.com">
              info@yantrar.com
            </a>
          </p>

          <p className="footer-contact-item">
            <FiPhone />
            <a href="tel:+918005572395">
              +91 8005572395
            </a>
          </p>

          <p className="footer-contact-item">
            <FiMapPin />
            <span>Jodhpur, Rajasthan</span>
          </p>

			<div className="footer-social">
			<a
				href="mailto:info@yantrar.com"
				aria-label="Email"
			>
				<FiMail />
			</a>

			<a
				href="https://wa.me/918005572395"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="WhatsApp"
			>
				<FaWhatsapp />
			</a>

			<a
				href="tel:+918005572395"
				aria-label="Call Us"
			>
				<FiPhone />
			</a>
			</div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Yantrar. Engineered with precision 🚀
      </div>
    </footer>
  );
}