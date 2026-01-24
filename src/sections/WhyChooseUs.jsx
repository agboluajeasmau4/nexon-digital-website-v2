import React from "react";
import FeatureCard from "../components/FeatureCard";
import { FiUsers, FiMonitor, FiClock, FiTrendingUp } from "react-icons/fi";
import "./whychooseus.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="why-header">
          <h2>Why Choose Nexon Digital</h2>
          <p>We deliver results that matter for your business, every time.</p>
        </div>

        <div className="features-grid">
          <FeatureCard
            icon={FiUsers}
            title="Expert Team"
            description="Our skilled designers and developers ensure your project is top-notch."
          />
          <FeatureCard
            icon={FiMonitor}
            title="Scalable Solutions"
            description="Websites and apps built to grow with your business and audience."
          />
          <FeatureCard
            icon={FiClock}
            title="Fast & Reliable"
            description="Projects delivered on time without compromising quality."
          />
          <FeatureCard
            icon={FiTrendingUp}
            title="Client-Centric"
            description="We focus on your success and results, not just aesthetics."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
