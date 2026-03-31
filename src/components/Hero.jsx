import React from "react";
import "./Hero.css";
import dashboardImg from "../assets/dashboard.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* BACKGROUND */}
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="glow-arc"></div>
      </div>

      <div className="hero-container">
        
        {/* LEFT */}
        <div className="hero-content">

          {/* TRUST BADGE */}
          <div className="hero-badge">
            Trusted by 30+ Businesses
          </div>

          {/* HEADLINE */}
          <h1 className="hero-title">
            Websites That Bring You <br />
            <span>More Customers</span> in 7 Days
          </h1>

          {/* SUBTEXT */}
          <p className="hero-subtext">
            We design fast, modern and conversion-focused websites 
            that help your business grow and stand out online.
          </p>

          {/* CTA */}
          <div className="hero-buttons">
            <button className="btn primary">
              Get Your Website
            </button>
            <button className="btn secondary">
              View Our Work
            </button>
          </div>

          {/* TRUST STATS */}
          <div className="hero-stats">
            <span>50+ Projects</span>
            <span>₦50M+ Generated</span>
            <span>5★ Client Rating</span>
          </div>
        
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <img
            src={dashboardImg}
            alt="Dashboard Preview"
            className="hero-img"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;