import React, { useState } from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await fetch("https://formspree.io/f/mqeagdda", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
        setTimeout(() => setSuccess(false), 5000); // auto-hide after 5s
      } else {
        alert("Subscription failed. Try again!");
      }
    } catch (error) {
      alert("Subscription failed. Check your connection.");
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Logo & Info */}
        <div className="footer-logo">
          <img src={logo} alt="Nexon Digital" />
          <p>
            Nexon Digital builds modern, scalable web solutions that grow your business.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          {success && (
            <div className="success-popup">
              <span>🎉 Subscription Successful!</span>
              <button onClick={() => setSuccess(false)}><FiX /></button>
            </div>
          )}
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiInstagram /></a>
            <a href="#"><FiLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nexon Digital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
