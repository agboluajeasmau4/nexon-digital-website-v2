import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import "./portfolio.css";

// Images
import p1 from "../assets/portfolio/p1.jpg";
import p2 from "../assets/portfolio/p1.jpg";
import p3 from "../assets/portfolio/p1.jpg";
import p4 from "../assets/portfolio/p1.jpg";
import p5 from "../assets/portfolio/p1.jpg";
import p6 from "../assets/portfolio/p1.jpg";
const projects = [
  {
    image: p1,
    title: "E-commerce Store",
    category: "E-commerce",
    link: "https://your-link.com",
    desc: "Modern online store designed for conversions and speed.",
    tech: ["React", "CSS", "Stripe"],
  },
  {
    image: p2,
    title: "Business Website",
    category: "Web Design",
    link: "https://your-link.com",
    desc: "Clean corporate website focused on user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: p3,
    title: "SaaS Landing Page",
    category: "UI/UX",
    link: "https://your-link.com",
    desc: "High-converting landing page for a SaaS product.",
    tech: ["React", "Figma"],
  },
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
            {["All", "Web Design", "E-commerce", "UI/UX"].map((cat) => (
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

      <Footer />
    </>
  );
};

export default Portfolio;