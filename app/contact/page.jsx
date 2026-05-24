"use client";

import { useState } from "react";
import "@/app/styles/Contact.css";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		phone: "",
		email: "",
		service: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		setSuccessMessage("");
		setErrorMessage("");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (data.success) {
				setSuccessMessage(
					"Thank you! Our Yantrar team will contact you shortly."
				);

				setFormData({
					name: "",
					company: "",
					phone: "",
					email: "",
					service: "",
					message: "",
				});
			} else {
				setErrorMessage(data.message || "Something went wrong.");
			}
		} catch (error) {
			setErrorMessage("Server error. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="contact-page" id="contact">
			{/* HERO */}
			<section className="contact-hero">
				<div className="contact-hero-grid"></div>

				<div className="container">
					<div className="hero-badge-contact">CONTACT YANTRAR</div>

					<h1>Let’s Build Intelligent Aerial Solutions</h1>

					<p className="hero-sub">
						Drone technology, AI automation, aerial mapping,
						surveillance, and enterprise-grade custom solutions
						tailored for your business.
					</p>

					<a href="#contact-form" className="hero-contact-btn">
						Book Consultation
					</a>
				</div>
			</section>

			{/* CONTACT CARDS */}
			<section className="contact-cards">
				<div className="container">
					<div className="cards-grid">
						<div className="contact-card">
							<div className="card-icon">📞</div>
							<h3>Call Us</h3>
							<p className="card-desc">
								Speak directly with our team
							</p>
							<p className="card-detail">+91 91167 55457</p>

							<a
								href="tel:+919116755457"
								className="card-button"
							>
								Call Now →
							</a>
						</div>

						<div className="contact-card">
							<div className="card-icon">💬</div>
							<h3>WhatsApp</h3>
							<p className="card-desc">
								Fastest way to connect
							</p>
							<p className="card-detail">
								Instant response support
							</p>

							<a
								href="https://wa.me/919116755457"
								target="_blank"
								rel="noopener noreferrer"
								className="card-button"
							>
								Chat Now →
							</a>
						</div>

						<div className="contact-card">
							<div className="card-icon">✉️</div>
							<h3>Email</h3>
							<p className="card-desc">
								For detailed business inquiries
							</p>
							<p className="card-detail">mayankdixit1221@gmail.com</p>

							<a
								href="mailto:mayankdixit1221@gmail.com"
								className="card-button"
							>
								Send Email →
							</a>
						</div>

						<div className="contact-card">
							<div className="card-icon">📍</div>
							<h3>Office</h3>
							<p className="card-desc">Visit our workspace</p>
							<p className="card-detail">
								Jodhpur, Rajasthan, India
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FORM */}
			<section className="contact-main" id="contact-form">
				<div className="container">
					<div className="contact-main-grid">
						<div className="contact-form-wrapper">
							<div className="section-label">GET IN TOUCH</div>
							<h2>Tell Us About Your Project</h2>

							<form
								className="contact-form"
								onSubmit={handleSubmit}
							>
								<div className="form-group">
									<label>Full Name *</label>
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										placeholder="Your full name"
									/>
								</div>

								<div className="form-group">
									<label>Company Name</label>
									<input
										type="text"
										name="company"
										value={formData.company}
										onChange={handleChange}
										placeholder="Your company"
									/>
								</div>

								<div className="form-group">
									<label>Phone Number *</label>
									<input
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										required
										maxLength={10}
										pattern="[6-9]{1}[0-9]{9}"
										placeholder="9116755457"
									/>
								</div>

								<div className="form-group">
									<label>Email Address *</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										placeholder="your@email.com"
									/>
								</div>

								<div className="form-group">
									<label>Service Needed *</label>
									<select
										name="service"
										value={formData.service}
										onChange={handleChange}
										required
									>
										<option value="">
											Select Service
										</option>
										<option>
											Drone Survey & Mapping
										</option>
										<option>
											Agricultural Drone Solutions
										</option>
										<option>AI Automation</option>
										<option>
											Surveillance Systems
										</option>
										<option>
											Custom Drone Development
										</option>
										<option>
											Enterprise Consultation
										</option>
										<option>Training</option>
										<option>Other</option>
									</select>
								</div>

								<div className="form-group">
									<label>Project Details *</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows="6"
										placeholder="Tell us about your requirements..."
									></textarea>
								</div>

								{successMessage && (
									<p
										style={{
											color: "#22c55e",
											marginBottom: "15px",
										}}
									>
										{successMessage}
									</p>
								)}

								{errorMessage && (
									<p
										style={{
											color: "#ef4444",
											marginBottom: "15px",
										}}
									>
										{errorMessage}
									</p>
								)}

								<button
									type="submit"
									className="submit-btn"
									disabled={loading}
								>
									{loading
										? "Submitting..."
										: "Request Consultation"}
								</button>
							</form>
						</div>

						<div className="contact-info-panel">
							<h3>Why Contact Yantrar?</h3>

							<ul>
								<li>✔ Custom drone solutions</li>
								<li>✔ Enterprise AI automation</li>
								<li>✔ Survey & mapping expertise</li>
								<li>✔ Nationwide deployment support</li>
								<li>✔ Consultation & training</li>
							</ul>

							<div className="whatsapp-box">
								<h4>Need a quick response?</h4>
								<p>
									Chat instantly with our team on WhatsApp.
								</p>

								<a
									href="https://wa.me/919116755457"
									target="_blank"
									rel="noopener noreferrer"
									className="whatsapp-btn"
								>
									Chat on WhatsApp
								</a>
							</div>

							<div className="office-box">
								<h4>Office Address</h4>
								<p>Jodhpur, Rajasthan, India</p>
								<p>Mon – Sat | 10 AM – 7 PM</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="contact-faq">
				<div className="container">
					<div className="section-label">FAQ</div>
					<h2>Frequently Asked Questions</h2>

					<div className="faq-grid">
						<div className="faq-item">
							<h4>
								Do you provide custom drone development?
							</h4>
							<p>
								Yes, tailored drone solutions based on project
								requirements.
							</p>
						</div>

						<div className="faq-item">
							<h4>Do you work across India?</h4>
							<p>
								Yes, deployment and support available
								nationwide.
							</p>
						</div>

						<div className="faq-item">
							<h4>
								Do you offer AI automation solutions?
							</h4>
							<p>
								Yes, enterprise automation and AI integrations.
							</p>
						</div>

						<div className="faq-item">
							<h4>Do you provide training?</h4>
							<p>
								Yes, operational and technical training support.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* TRUST */}
			<section className="trust-strip">
				<div className="container">
					<p>
						Trusted for innovation in drones, AI automation,
						aerial intelligence, and enterprise technology.
					</p>
				</div>
			</section>
		</div>
	);
}