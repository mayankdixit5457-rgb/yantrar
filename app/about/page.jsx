"use client";

import "app/styles/About.css";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function AboutPage() {
  const router = useRouter();

  const solutionsRef = useRef(null);
  const processRef = useRef(null);

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero premium-hero">

        <div className="hero-overlay"></div>

        <div className="container hero-content">

          <div className="hero-badge">
            YANTRAR • ADVANCED UAV ENGINEERING
          </div>

          <h1>
            Building Intelligent Aerial Systems For Tomorrow’s Industries
          </h1>

          <p>
            Advanced drone technologies engineered for surveillance,
            industrial inspections, agriculture, mapping, public safety,
            and autonomous aerial operations.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                solutionsRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Explore Solutions
            </button>

            <button
              className="secondary-btn"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </button>

          </div>

        </div>

      </section>

      {/* TRUST STATS */}
      <section className="stats-strip">

        <div className="container stats-grid">

          <div className="stat-box">
            <h3>AI-Driven</h3>
            <p>Intelligent aerial automation systems</p>
          </div>

          <div className="stat-box">
            <h3>Enterprise Ready</h3>
            <p>Scalable drone solutions for industry</p>
          </div>

          <div className="stat-box">
            <h3>Precision Engineering</h3>
            <p>Reliable UAV performance architecture</p>
          </div>

          <div className="stat-box">
            <h3>Future Focused</h3>
            <p>Advanced autonomous flight innovation</p>
          </div>

        </div>

      </section>

      {/* WHO WE ARE */}
      <section className="about-story-section">

        <div className="container story-grid">

          <div className="story-left">

            <div className="section-tag">
              WHO WE ARE
            </div>

            <h2>
              Precision Engineering Meets Intelligent Flight
            </h2>

            <p>
              Yantrar is an advanced drone technology company focused
              on intelligent UAV systems, autonomous flight engineering,
              aerial intelligence, and application-driven innovation.
            </p>

            <p>
              We design aerial platforms that solve real operational
              challenges across surveillance, agriculture, inspections,
              mapping, industrial operations, and mission-critical use cases.
            </p>

          </div>

          <div className="story-right">

            <video
              className="story-image"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/about/Drone.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>

        </div>

      </section>

      {/* WHY YANTRAR EXISTS */}
      <section className="vision-block">

        <div className="container vision-content">

          <div className="section-tag">
            OUR PURPOSE
          </div>

          <h2>
            Why Yantrar Exists
          </h2>

          <p>
            Modern industries require aerial systems that are smarter,
            faster, safer, and operationally dependable.
          </p>

          <p>
            Yantrar was built to push aerial engineering beyond conventional
            drones—creating intelligent autonomous systems capable of solving
            real-world industrial and enterprise challenges with precision.
          </p>

        </div>

      </section>

      {/* MISSION / VISION */}
      <section className="mission-modern">

        <div className="container">

          <div className="mission-grid-modern">

            <div className="mission-modern-card">
              <span>MISSION</span>
              <h3>Engineering Reliable Aerial Intelligence</h3>
              <p>
                To build intelligent drone technologies that improve
                safety, precision, efficiency, and mission performance.
              </p>
            </div>

            <div className="mission-modern-card">
              <span>VISION</span>
              <h3>Defining The Future Of Autonomous Aviation</h3>
              <p>
                To become a leading force in advanced UAV engineering
                and intelligent autonomous aerial ecosystems.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SOLUTIONS */}
      <section
        className="solutions-section"
        ref={solutionsRef}
      >

        <div className="container">

          <div className="section-heading center">

            <div className="section-tag">
              WHAT WE BUILD
            </div>

            <h2>
              Advanced Aerial Solutions
            </h2>

          </div>

          <div className="solutions-grid">

            <div className="solution-card">
              <h3>Autonomous UAV Systems</h3>
              <p>Intelligent autonomous flight platforms</p>
            </div>

            <div className="solution-card">
              <h3>Surveillance UAVs</h3>
              <p>Persistent aerial monitoring solutions</p>
            </div>

            <div className="solution-card">
              <h3>Industrial Inspection</h3>
              <p>Infrastructure & asset inspection platforms</p>
            </div>

            <div className="solution-card">
              <h3>Precision Agriculture</h3>
              <p>Smart agricultural aerial technologies</p>
            </div>

            <div className="solution-card">
              <h3>Mapping & Survey</h3>
              <p>LiDAR, RTK, and survey intelligence</p>
            </div>

            <div className="solution-card">
              <h3>Custom UAV Platforms</h3>
              <p>Tailored mission-specific drone systems</p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="choose-modern">

        <div className="container">

          <div className="section-heading center">

            <div className="section-tag">
              WHY YANTRAR
            </div>

            <h2>
              Built For Serious Operations
            </h2>

          </div>

          <div className="choose-modern-grid">

            <div className="choose-box">Advanced Engineering</div>
            <div className="choose-box">AI Flight Intelligence</div>
            <div className="choose-box">Mission-Focused Solutions</div>
            <div className="choose-box">Scalable Architecture</div>
            <div className="choose-box">Precision Integration</div>
            <div className="choose-box">Operational Reliability</div>

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="industries-modern">

        <div className="container">

          <div className="section-heading center">

            <div className="section-tag">
              INDUSTRIES
            </div>

            <h2>
              Serving Critical Sectors
            </h2>

          </div>

          <div className="industries-modern-grid">

            <div className="industry-tile">Agriculture</div>
            <div className="industry-tile">Infrastructure</div>
            <div className="industry-tile">Energy</div>
            <div className="industry-tile">Security</div>
            <div className="industry-tile">Public Safety</div>
            <div className="industry-tile">Surveying</div>
            <div className="industry-tile">Construction</div>
            <div className="industry-tile">Industrial Operations</div>

          </div>

        </div>

      </section>

      {/* TECHNOLOGY */}
      <section className="tech-modern">

        <div className="container">

          <div className="section-heading center">

            <div className="section-tag">
              CORE TECHNOLOGIES
            </div>

            <h2>
              Powered By Advanced Intelligence
            </h2>

          </div>

          <div className="tech-grid">

            <div className="tech-card">AI Navigation</div>
            <div className="tech-card">Computer Vision</div>
            <div className="tech-card">LiDAR Integration</div>
            <div className="tech-card">Thermal Imaging</div>
            <div className="tech-card">RTK / PPK Systems</div>
            <div className="tech-card">Obstacle Avoidance</div>
            <div className="tech-card">Telemetry Systems</div>
            <div className="tech-card">Autonomous Flight Control</div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section
        className="process-modern"
        ref={processRef}
      >

        <div className="container">

          <div className="section-heading center">

            <div className="section-tag">
              OUR PROCESS
            </div>

            <h2>
              From Engineering To Deployment
            </h2>

          </div>

          <div className="process-grid">

            <div className="process-step">
              <span>01</span>
              <h3>Consultation</h3>
            </div>

            <div className="process-step">
              <span>02</span>
              <h3>Engineering</h3>
            </div>

            <div className="process-step">
              <span>03</span>
              <h3>Validation</h3>
            </div>

            <div className="process-step">
              <span>04</span>
              <h3>Deployment</h3>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="about-cta premium-cta">

        <div className="container cta-content">

          <h2>
            Build Smarter Aerial Systems With Yantrar
          </h2>

          <p>
            Partner with Yantrar for advanced drone technologies,
            autonomous aerial systems, and precision UAV innovation.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => router.push("/contact")}
            >
              Start A Conversation
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                processRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              View Process
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}