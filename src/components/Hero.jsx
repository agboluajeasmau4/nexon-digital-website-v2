// import { useState, useEffect } from "react";
// import "./hero.css";
// import slide1 from "../assets/hero1-img.jpg";
// import slide2 from "../assets/hero2-img.jpg";
// import slide3 from "../assets/hero3-img.jpg";

// const slides = [
//   {
//     image: slide1,
//     title: "We Build Digital Experiences That Convert",
//     subtext: "Take your business to the next level with Nexon Digital.",
//   },
//   {
//     image: slide2,
//     title: "Modern Web Solutions for Your Brand",
//     subtext: "Fast, scalable, and beautiful websites to grow your business.",
//   },
//   {
//     image: slide3,
//     title: "Your Vision, Our Digital Expertise",
//     subtext: "We turn ideas into digital realities that engage and convert.",
//   },
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const [offset, setOffset] = useState(0);
//   const [fade, setFade] = useState(true);

//   // Auto-slide every 5s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Trigger fade out
//       setFade(false);

//       setTimeout(() => {
//         setCurrent((prev) => (prev + 1) % slides.length);
//         setFade(true); // Fade in new text
//       }, 500); // match fade-out duration
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Parallax scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setOffset(window.scrollY * 0.3);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="hero-slider">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`slide ${index === current ? "active" : ""}`}
//           style={{
//             backgroundImage: `url(${slide.image})`,
//             transform: `translateY(${offset}px)`,
//           }}
//         ></div>
//       ))}

//       <div
//         className="hero-overlay"
//         style={{ transform: `translate(-50%, calc(-50% + ${offset * -0.5}px))` }}
//       >
//         <h1 className={`hero-title ${fade ? "fade-in" : "fade-out"}`}>
//           {slides[current].title}
//         </h1>
//         <p className={`hero-subtext ${fade ? "fade-in" : "fade-out"}`}>
//           {slides[current].subtext}
//         </p>
//         <div className="hero-buttons">
//           <button className="btn primary">Get a Free Quote</button>
//           <button className="btn secondary">View Our Work</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import "./Hero.css";
import dashboardImg from "../assets/dashboard.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Grid + Glow */}
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="glow-arc"></div>
      </div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">
            We Build High-Converting <br />
            Digital Experiences
          </h1>

          <p className="hero-subtext">
            We help businesses establish a <strong>strong online presence</strong>{" "}
            with fast, modern, and conversion-focused websites.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Get a Quote</button>
            <button className="btn secondary">View Our Work</button>
          </div>

          <div className="hero-stats">
            <span>50+ Projects Delivered</span>
            <span>•</span>
            <span>Fast Delivery</span>
            <span>•</span>
            <span>Client-Focused</span>
          </div>
        </div>
        

        {/* RIGHT IMAGE */}
                  <div className="hero-visual">
                  <img
            src={dashboardImg}
            alt="Ecommerce SaaS Dashboard"
            className="hero-img main"
            />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;