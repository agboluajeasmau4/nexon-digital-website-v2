import React from "react";
import {
  FiCode,
  FiLayout,
  FiShoppingCart,
  FiTrendingUp,
} from "react-icons/fi";
import ServiceCard from "../components/ServiceCard";
import "./services.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2>What We Do</h2>
          <p>
            We help brands grow with modern, high-performing digital solutions.
          </p>
        </div>

        <div className="services-grid">
          <ServiceCard
            icon={FiCode}
            title="Web Design & Development"
            description="Fast, responsive, and scalable websites built to convert visitors into customers."
          />

          <ServiceCard
            icon={FiLayout}
            title="UI/UX Design"
            description="User-focused designs that improve engagement, usability, and retention."
          />

          <ServiceCard
            icon={FiShoppingCart}
            title="E-commerce Solutions"
            description="High-converting online stores designed to sell and scale effortlessly."
          />

          <ServiceCard
            icon={FiTrendingUp}
            title="Branding & Strategy"
            description="Strong digital identity and strategy to position your brand for growth."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
