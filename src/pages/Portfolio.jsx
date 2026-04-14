import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA"
import "./portfolio.css";

// Images
import p1 from "../assets/portfolio/p1.jpg";
import p2 from "../assets/portfolio/p2.jpg";
import p3 from "../assets/portfolio/p3.jpg";
import p4 from "../assets/portfolio/p4.png";
import p5 from "../assets/portfolio/p5.png";
import p6 from "../assets/portfolio/p6.png";
const projects = [
  // {
  //   image: p1,
  //   title: "E-commerce Store",
  //   category: "E-commerce",
  //   link: "https://your-link.com",
  //   desc: "Modern online store designed for conversions and speed.",
  //   tech: ["React", "CSS", "Stripe"],
  // },
  // {
  //   image: p2,
  //   title: "Business Website",
  //   category: "Web Design",
  //   link: "https://your-link.com",
  //   desc: "Clean corporate website focused on user experience.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  // },
  // {
  //   image: p3,
  //   title: "SaaS Landing Page",
  //   category: "UI/UX",
  //   link: "https://your-link.com",
  //   desc: "High-converting landing page for a SaaS product.",
  //   tech: ["React", "Figma"],
  // },

  {
    image: p4,
    title: "Restaurant Website",
    category: "Restaurant & Food Tech",
    link: "https://blaze-bites.lovable.app/",
    desc: "Modern website for a fast-food restaurant with online ordering.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
    {
    image: p5,
    title: "Fashion Store",
    category: "E-Commerce Systems",
    link: "https://noir-studio-shop.lovable.app/",
    desc: "Elegant online store for a fashion brand with seamless shopping experience.",
    tech: ["React", "CSS", "Stripe"],
  },
  {
  image: p6,
  title: "Prestige Estates – Real Estate Website",
  category: "Real Estate Solutions",
  link : "https://prestige-estates-dwell.lovable.app/" ,
  desc: "A modern property listing platform designed to help real estate agencies showcase properties and generate qualified leads through intuitive search and contact features.",
  tech: ["React", "Node.js", "MongoDB"]
}
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />

      <section className="portfolio">
        <div className="container">
          <h1 className="portfolio-title">Our Portfolio</h1>
          <p className="portfolio-subtext">
            A showcase of projects built with strategy, creativity, and performance.
          </p>

          {/* Filters */}
          <div className="filters">
            {[  "All",
              "E-Commerce Systems",
              "Restaurant & Food Tech",
              "Corporate Brand Websites",
              "Educational Platforms",
              "Real Estate Solutions",
              "SaaS / Dashboards",
              "Portfolio / Personal Branding Systems"
].map((cat) => (
              <button
                key={cat}
                className={filter === cat ? "active" : ""}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
                </div>
                
        </div>
      </section>
      <CTA/>
      <Footer />
    </>
  );
};

export default Portfolio;