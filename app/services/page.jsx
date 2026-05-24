"use client";
import Link from "next/link";
import "./services.css";

const services = [
  {
    slug: "agriculture",
    title: "Agriculture",
    desc: "AI-powered precision crop systems",
    image: "agriculture.jpg",
  },
  {
    slug: "survey-mapping",
    title: "Survey & Mapping",
    desc: "RTK terrain intelligence & analytics",
    image: "/survey.png",
  },
  {
    slug: "inspection",
    title: "Inspection",
    desc: "Autonomous industrial diagnostics",
    image: "inspection.png",
  },
  {
    slug: "surveillance",
    title: "Surveillance",
    desc: "Real-time aerial monitoring systems",
    image: "security.png",
  },
];



export default function ServicesPage() {
  return (
    <section className="services-page">

      {/* HERO */}
      <div className="services-hero">

        <span className="tag">
          NEXT-GEN AERIAL SYSTEMS
        </span>

        <h1>
          Autonomous <span>Aerial Intelligence</span>
        </h1>

        <p>
          Advanced AI-powered drone systems engineered for agriculture,
          mapping, inspection, surveillance, and industrial automation.
        </p>

      </div>

      {/* STATS */}
      <div className="services-stats">

        <div className="stat-box">
          <h3>12+</h3>
          <p>Industries</p>
        </div>

        <div className="stat-box">
          <h3>5000+</h3>
          <p>Acres Covered</p>
        </div>

        <div className="stat-box">
          <h3>98%</h3>
          <p>Precision Accuracy</p>
        </div>

        <div className="stat-box">
          <h3>24/7</h3>
          <p>Autonomous Operations</p>
        </div>

      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        {services.map((service) => (

          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="service-card"
          >

            <img
              src={service.image}
              alt={service.title}
            />

            <div className="overlay"></div>

            <div className="card-content">

              <div className="service-top">
                <span className="service-mini-tag">
                  AI SYSTEM
                </span>
              </div>

              <div className="service-bottom">

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

                <span className="explore">
                  Explore Service →
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* PROCESS */}
      <div className="process-section">

        <div className="process-box">
          <span>01</span>
          <h4>Analyze</h4>
        </div>

        <div className="process-box">
          <span>02</span>
          <h4>Deploy</h4>
        </div>

        <div className="process-box">
          <span>03</span>
          <h4>Automate</h4>
        </div>

        <div className="process-box">
          <span>04</span>
          <h4>Optimize</h4>
        </div>

      </div>

      {/* CTA */}
      <div className="services-cta">

        <h2>
          Need a Custom Drone Solution?
        </h2>

        <p>
          Let’s build advanced autonomous systems for your operations.
        </p>

        <Link
          href="/contact"
          className="btn-primary"
        >
          Get Started →
        </Link>

      </div>

    </section>
  );
}