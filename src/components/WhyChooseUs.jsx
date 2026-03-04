import React from "react";
import "./WhyChooseUs.css";

const features = [
  {
    title: "Fast Shipping",
    desc: "Quick and secure delivery across India."
  },
  {
    title: "Secure Payments",
    desc: "100% safe and encrypted checkout process."
  },
  {
    title: "Quality Tested",
    desc: "All products are performance tested."
  },
  {
    title: "Technical Support",
    desc: "Expert guidance for your builds."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why">
      <h2>Why Choose Us</h2>

      <div className="why-grid">
        {features.map((item, index) => (
          <div key={index} className="why-card">
            <div className="why-icon">★</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;