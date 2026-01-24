import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import "./portfolio.css";

// TEMP images (replace later)
import project1 from "../assets/E-commerce-Website.png";
import project2 from "../assets/Business-Landing-Page.png";
import project3 from "../assets/Brand-Website.png";

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <h2>Our Work</h2>
          <p>A selection of projects we’ve built for growing brands.</p>
        </div>

        <div className="portfolio-grid">
          <PortfolioCard
            image={project1}
            title="E-commerce Website"
            category="Web Development"
          />
          <PortfolioCard
            image={project2}
            title="Business Landing Page"
            category="UI / UX Design"
          />
          <PortfolioCard
            image={project3}
            title="Brand Website"
            category="Branding"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
