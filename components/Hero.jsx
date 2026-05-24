"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./Hero.css";

/* ========================= */
/* TYPING EFFECT */
/* ========================= */
function useTypingEffect(text, speed = 60, delay = 0) {
	const [displayed, setDisplayed] = useState("");
	const [done, setDone] = useState(false);

	useEffect(() => {
		let i = 0;
		let interval;

		setDisplayed("");
		setDone(false);

		const timeout = setTimeout(() => {
			interval = setInterval(() => {
				i++;

				setDisplayed(text.slice(0, i));

				if (i >= text.length) {
					clearInterval(interval);
					setDone(true);
				}
			}, speed);
		}, delay);

		return () => {
			clearTimeout(timeout);

			if (interval) {
				clearInterval(interval);
			}
		};
	}, [text, speed, delay]);

	return { displayed, done };
}

/* ========================= */
/* HERO */
/* ========================= */
export default function Hero() {
	const router = useRouter();

	/* SLIDER IMAGES */
	const images = [
		"/hero/hero1.jpg",
		"/hero2.png",
		"/hero/hero3.png",
		"/hero/hero4.png",
	];

	const [current, setCurrent] = useState(0);

	/* AUTO SLIDER */
	useEffect(() => {
		let interval;

		const startSlider = () => {
			interval = setInterval(() => {
				setCurrent((prev) => (prev + 1) % images.length);
			}, 4000);
		};

		const handleVisibility = () => {
			if (document.hidden) {
				clearInterval(interval);
			} else {
				startSlider();
			}
		};

		startSlider();

		document.addEventListener(
			"visibilitychange",
			handleVisibility
		);

		return () => {
			clearInterval(interval);

			document.removeEventListener(
				"visibilitychange",
				handleVisibility
			);
		};
	}, [images.length]);

	/* TYPING TEXT */
	const { displayed: line1, done } = useTypingEffect(
		"Elevate Your RC Experience",
		40,
		200
	);

	const { displayed: line2 } = useTypingEffect(
		"Premium Quality Drones & Components",
		50,
		done ? 0 : 2000
	);

	/* SHOP BUTTON */
	const handleShop = () => {
		const section = document.getElementById("shop");

		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="hero">

			{/* BACKGROUND SLIDER */}
			<div className="hero-slider">
				{images.map((img, index) => (
					<div
						key={index}
						className={`hero-slide ${
							index === current ? "active" : ""
						}`}
						style={{
							backgroundImage: `url(${img})`,
						}}
					/>
				))}
			</div>

			{/* OVERLAY */}
			<div className="hero-overlay"></div>

			{/* CONTENT */}
			<div className="hero-content">

				<span className="hero-tag">
					PREMIUM QUALITY
				</span>

				<h1>
					{line1}
					<br />
					<span className="highlight">
						{line2}
					</span>
				</h1>
			<div className={`hero-bottom ${done ? "show" : ""}`}>

				<p>
					High-performance drones, RC planes,
					and components for builders,
					makers, and professionals.
				</p>
				</div>

				<div className="hero-buttons">

					<button
						className="btn-primary"
						onClick={handleShop}
						aria-label="Shop Products"
					>
						Shop Now →
					</button>

					<button
						className="btn-secondary"
						onClick={() =>
							router.push("/about")
						}
						aria-label="Learn More About Us"
					>
						Learn More
					</button>

				</div>

				{/* DOTS */}
				<div className="hero-dots">
					{images.map((_, i) => (
						<span
							key={i}
							className={
								i === current
									? "active"
									: ""
							}
						/>
					))}
				</div>

			</div>
		</section>
	);
}