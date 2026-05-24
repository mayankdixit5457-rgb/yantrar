"use client";

import "./page.css";

import { useState, useEffect } from "react";

import { services } from "@/data/servicesData";

export default function ServicePage({ params }) {

	const service = services[params.slug];

	const [currentImage, setCurrentImage] = useState(0);

	/* IMAGE SLIDER */
	useEffect(() => {

		if (!service?.images?.length) return;

		const interval = setInterval(() => {

			setCurrentImage((prev) =>
				prev === service.images.length - 1
					? 0
					: prev + 1
			);

		}, 4000);

		return () => clearInterval(interval);

	}, [service]);

	if (!service) {
		return <div>Service not found</div>;
	}

	return (

		<div className="service-page">

			{/* HERO */}
			<section
				className="service-hero"
				style={{
					backgroundImage: `url(${service.images[currentImage]})`,
				}}
			>

				<div className="overlay"></div>

				<div className="container hero-content">

					<div className="hero-badge">
						NEXT GEN DRONE SOLUTION
					</div>

					<h1>{service.title}</h1>

					<p className="subtitle">
						{service.tagline}
					</p>

					<div className="hero-buttons">

						<button className="primary-btn">
							Get Quote
						</button>

						<button className="secondary-btn">
							Watch Demo
						</button>

					</div>

					<div className="hero-stats">

						<div className="stat-card">
							<h3>10x</h3>
							<p>Faster Operations</p>
						</div>

						<div className="stat-card">
							<h3>50%</h3>
							<p>Cost Saving</p>
						</div>

						<div className="stat-card">
							<h3>99%</h3>
							<p>Precision Accuracy</p>
						</div>

					</div>

					{/* SLIDER DOTS */}
					<div className="slider-dots">

						{service.images.map((_, index) => (

							<span
								key={index}
								className={`dot ${
									index === currentImage
										? "active"
										: ""
								}`}
							></span>

						))}

					</div>

				</div>

			</section>


			{/* PROBLEM SOLUTION */}
			<section className="problem-section">

				<div className="container">

					<div className="section-heading">
						<h2>Challenges & Solutions</h2>

						<p>
							Modern drone systems solve traditional
							operational limitations with speed,
							automation, and precision.
						</p>
					</div>

					<div className="problem-grid">

						<div className="problem-card">

							<div className="card-icon">
								⚠️
							</div>

							<h3>Traditional Problem</h3>

							<p>
								{service.problem}
							</p>

						</div>

						<div className="solution-card">

							<div className="card-icon">
								🚀
							</div>

							<h3>Drone Solution</h3>

							<p>
								{service.solution}
							</p>

						</div>

					</div>

				</div>

			</section>


			{/* HOW IT WORKS */}
			<section className="workflow-section">

				<div className="container">

					<div className="section-heading">
						<h2>How It Works</h2>

						<p>
							Advanced autonomous workflow powered by
							GPS, sensors, and AI-based automation.
						</p>
					</div>

					<div className="workflow-grid">

						{service.how.map((item, index) => (

							<div
								className="workflow-card"
								key={index}
							>

								<div className="workflow-number">
									0{index + 1}
								</div>

								<h3>{item}</h3>

								<p>
									High efficiency drone operation
									with real-time intelligent control.
								</p>

							</div>

						))}

					</div>

				</div>

			</section>


			{/* BENEFITS */}
			<section className="benefits-section">

				<div className="container">

					<div className="section-heading">
						<h2>Key Benefits</h2>

						<p>
							Powerful advantages for modern industries
							and enterprise operations.
						</p>
					</div>

					<div className="benefits-grid">

						{service.benefits.map((item, index) => (

							<div
								className="benefit-card"
								key={index}
							>

								<div className="benefit-icon">
									✔
								</div>

								<h3>{item}</h3>

							</div>

						))}

					</div>

				</div>

			</section>


			{/* CTA */}
			<section className="service-cta">

				<div className="container center">

					<h2>
						Ready To Upgrade Your Operations?
					</h2>

					<p>
						Transform your business with next generation
						drone technology solutions.
					</p>

					<div className="cta-buttons">

						<button className="primary-btn">
							Request Quote
						</button>

						<button className="secondary-btn">
							Contact Us
						</button>

					</div>

				</div>

			</section>

		</div>

	);
}