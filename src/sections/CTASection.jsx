import React from "react";
import "./cta.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Let’s Build Your Digital Future Together
          </h2>
          <p className="cta-text">
            Contact us today and get a free consultation for your business. 
            We’ll help you grow, scale, and stand out online.
          </p>

          <div className="cta-buttons">
            <a href="#contact" className="btn primary">
              Get a Free Quote
            </a>
            <a href="#portfolio" className="btn secondary">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
