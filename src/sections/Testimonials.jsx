import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import "./testimonials.css";

// TEMP client images
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client3.jpg";
import client3 from "../assets/client2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Bello",
      role: "CEO, Trendy Brands",
      photo: client1,
      text: "Nexon Digital transformed our website. The results were beyond our expectations!",
    },
    {
      name: "Kemi Adeyemi",
      role: "Marketing Head, FastTech",
      photo: client2,
      text: "Professional, reliable, and creative. Our traffic and conversions skyrocketed.",
    },
    {
      name: "David Okoro",
      role: "Founder, ShopSmart",
      photo: client3,
      text: "They built a clean, fast e-commerce site that our customers love.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>What Our Clients Say</h2>
          <p>Hear from brands we’ve helped grow and succeed online.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              name={t.name}
              role={t.role}
              photo={t.photo}
              text={t.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
