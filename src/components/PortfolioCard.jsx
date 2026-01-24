import React from "react";
import "../sections/portfolio.css";


const PortfolioCard = ({ image, title, category }) => {
  return (
    <div className="portfolio-card">
      <img src={image} alt={title} />

      <div className="portfolio-overlay">
        <span className="portfolio-category">{category}</span>
        <h3>{title}</h3>
        <button className="portfolio-btn">View Project</button>
      </div>
    </div>
  );
};

export default PortfolioCard;
