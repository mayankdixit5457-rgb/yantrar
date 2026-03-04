import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div>
          <h3>XYZ Robotics</h3>
          <p>
            Premium drones, RC planes and robotics components engineered
            for creators and innovators.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Categories</h4>
          <ul>
            <li>Drones</li>
            <li>RC Planes</li>
            <li>Motors</li>
            <li>Batteries</li>
            <li>Controllers</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: support@xyzrobotics.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Jodhpur, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 XYZ Robotics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;