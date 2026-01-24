import React from "react";
import "../sections/Testimonials.css";

const TestimonialCard = ({ name, role, photo, text }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-client">
        <img src={photo} alt={name} className="testimonial-photo" />
        <div>
          <h4 className="testimonial-name">{name}</h4>
          <span className="testimonial-role">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
