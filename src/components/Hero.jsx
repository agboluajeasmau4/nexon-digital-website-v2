import { useState, useEffect } from "react";
import "./hero.css";
import slide1 from "../assets/hero1.jpg";
import slide2 from "../assets/hero2.jpg";
import slide3 from "../assets/hero3.jpg";

const slides = [
  {
    image: slide1,
    title: "We Build Digital Experiences That Convert",
    subtext: "Take your business to the next level with Nexon Digital.",
  },
  {
    image: slide2,
    title: "Modern Web Solutions for Your Brand",
    subtext: "Fast, scalable, and beautiful websites to grow your business.",
  },
  {
    image: slide3,
    title: "Your Vision, Our Digital Expertise",
    subtext: "We turn ideas into digital realities that engage and convert.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true); // Fade in new text
      }, 500); // match fade-out duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            transform: `translateY(${offset}px)`,
          }}
        ></div>
      ))}

      <div
        className="hero-overlay"
        style={{ transform: `translate(-50%, calc(-50% + ${offset * -0.5}px))` }}
      >
        <h1 className={`hero-title ${fade ? "fade-in" : "fade-out"}`}>
          {slides[current].title}
        </h1>
        <p className={`hero-subtext ${fade ? "fade-in" : "fade-out"}`}>
          {slides[current].subtext}
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Get a Free Quote</button>
          <button className="btn secondary">View Our Work</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
