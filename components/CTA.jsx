"use client";

import { useRouter } from "next/navigation";
import "./CTA.css";

export default function CTA() {

	const router = useRouter();

	return (
		<section className="cta">

			{/* BACKGROUND ELEMENTS */}

			<div className="cta-grid-bg"></div>
			<div className="cta-glow"></div>
			<div className="cta-glow-secondary"></div>

			<div className="cta-container">

				{/* TAG */}

				<div className="cta-tag">
					AUTONOMOUS AERIAL SYSTEMS
				</div>

				{/* TITLE */}

				<h2>
					Engineering the Future
					of UAV Operations
				</h2>

				{/* SUBTEXT */}

				<p className="cta-subhead">
					Advanced drone systems designed for agriculture,
					mapping, industrial inspection and enterprise deployment.
				</p>

				{/* BUTTONS */}

				<div className="cta-buttons">

					<button
						className="primary-btn"
						onClick={() => router.push("/contact")}
					>
						Discuss Your Project
					</button>

					<button
						className="secondary-btn"
						onClick={() => {
							document
								.getElementById("categories")
								?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Explore UAV Systems
					</button>

				</div>

				{/* DIVIDER */}

				<div className="cta-divider"></div>

				{/* TRUST STRIP */}

				<div className="cta-features">

					<div className="feature-pill">
						<span>✓</span>
						<p>Custom UAV Development</p>
					</div>

					<div className="feature-pill">
						<span>✓</span>
						<p>Enterprise Support</p>
					</div>

					<div className="feature-pill">
						<span>✓</span>
						<p>Pan-India Deployment</p>
					</div>

					<div className="feature-pill">
						<span>✓</span>
						<p>Mission-Tested Systems</p>
					</div>

				</div>

			</div>

		</section>
	);
}