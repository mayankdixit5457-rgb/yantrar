import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Amazing quality drone parts. Delivery was fast and packaging was perfect.",
  },
  {
    name: "Ankit Verma",
    text: "Motors performance is outstanding. Definitely my go-to robotics store.",
  },
  {
    name: "Priya Mehta",
    text: "Customer support helped me choose the right ESC for my build. Great experience.",
  },
  {
    name: "Saurabh Jain",
    text: "Battery backup is excellent. Very satisfied with the product quality.",
  },
  {
    name: "Neha Kapoor",
    text: "Ordered an RC plane kit and everything arrived safely. Highly recommended!",
  },
  {
    name: "Arjun Patel",
    text: "Best place for FPV gear. Authentic products and competitive pricing.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="review">"{item.text}"</p>
            <h4 className="name">- {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;