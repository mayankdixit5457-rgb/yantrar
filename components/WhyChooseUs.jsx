"use client";

import { useRouter } from "next/navigation";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {

	const router = useRouter();

	return (
		<section className="why-choose-us">

			<div className="section-label">
				ENGINEERING ADVANTAGE
			</div>

			<h2>
				Engineered for Real-World UAV Operations
			</h2>

			<p className="section-sub">
				Advanced aerial systems built for precision,
				reliability and scalable deployment across
				industrial applications.
			</p>

			{/* FEATURES */}

			<div className="features-grid">

				{/* CARD 1 */}

				<div className="feature-card">
					<div className="feature-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.6"
						>
							<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
						</svg>
					</div>

					<h3>Precision Engineering</h3>

					<p>
						Mission-optimized UAV systems designed
						for stability, endurance and operational efficiency.
					</p>
				</div>

				{/* CARD 2 */}

				<div className="feature-card">
					<div className="feature-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.6"
						>
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
						</svg>
					</div>

					<h3>Flight-Tested Reliability</h3>

					<p>
						Every platform undergoes inspection,
						validation and real-world operational testing.
					</p>
				</div>

				{/* CARD 3 */}

				<div className="feature-card">
					<div className="feature-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.6"
						>
							<rect x="3" y="3" width="18" height="18" rx="2"/>
							<path d="M9 9h6v6H9z"/>
						</svg>
					</div>

					<h3>Modular Architecture</h3>

					<p>
						Flexible payload integration and adaptable
						system configurations for multiple industries.
					</p>
				</div>

				{/* CARD 4 */}

				<div className="feature-card">
					<div className="feature-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.6"
						>
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
							<circle cx="12" cy="7" r="4"/>
						</svg>
					</div>

					<h3>Technical Expertise</h3>

					<p>
						Guidance from experienced UAV builders,
						engineers and aerial system specialists.
					</p>
				</div>

				{/* CARD 5 */}

				<div className="feature-card">
					<div className="feature-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.6"
						>
							<path d="M3 12h18"/>
							<path d="M12 3l9 9-9 9"/>
						</svg>
					</div>

					<h3>Rapid Deployment</h3>

					<p>
						Streamlined production, secure packaging
						and reliable pan-India logistics support.
					</p>
				</div>

				{/* CARD 6 */}

				<div className="feature-card">
					<div className="feature-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.6"
						>
							<path d="M4 19h16"/>
							<path d="M5 15l4-4 4 3 6-7"/>
						</svg>
					</div>

					<h3>Custom UAV Development</h3>

					<p>
						Tailored drone systems for agriculture,
						mapping, research and enterprise operations.
					</p>
				</div>

			</div>

			{/* TRUST STRIP */}

			<div className="trust-strip">

				<div className="trust-item">
					<span>✓</span>
					<p>Verified Electronics</p>
				</div>

				<div className="trust-item">
					<span>✓</span>
					<p>Flight-Tested Systems</p>
				</div>

				<div className="trust-item">
					<span>✓</span>
					<p>Secure Packaging</p>
				</div>

				<div className="trust-item">
					<span>✓</span>
					<p>Technical Assistance</p>
				</div>

			</div>

			{/* METRICS */}

			<div className="stats-grid">

				<div className="stat-box">
					<h4>500+</h4>
					<p>Orders Delivered</p>
				</div>

				<div className="stat-box">
					<h4>50+</h4>
					<p>Drone Builds</p>
				</div>

				<div className="stat-box">
					<h4>Pan India</h4>
					<p>Operations</p>
				</div>

				<div className="stat-box">
					<h4>Enterprise</h4>
					<p>Support Ready</p>
				</div>

			</div>

			{/* CTA */}


		</section>
	);
}