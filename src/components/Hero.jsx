import React from "react";
import "./Hero.css";
import droneImage from "../assets/drone.jpg"; // add your drone image in assets

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Build. <span>Fly.</span> Innovate.
        </h1>

        <p>
          Premium drones, RC planes and high-performance electronics
          engineered for creators and innovators.
        </p>

        <button className="hero-btn">Shop Now</button>
      </div>

      <div className="hero-image">
        <img src={droneImage} alt="Drone" />
      </div>
    </section>
  );
};

export default Hero;