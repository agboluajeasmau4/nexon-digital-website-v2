import React from "react";
import "./pricing.css";

const plans = [
  {
    name: "Starter",
    price: "₦150,000",
    features: [
      "Single-page website",
      "Mobile responsive",
      "Basic SEO",
      "7-day delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "₦300,000",
    features: [
      "Multi-page website",
      "Custom UI/UX",
      "SEO optimized",
      "Contact form",
      "14-day delivery",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Premium",
    price: "₦600,000",
    features: [
      "Custom web app / e-commerce",
      "Advanced SEO",
      "Performance optimization",
      "30-day support",
    ],
    cta: "Book a Call",
    popular: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Pricing & Plans</h2>
          <p>Choose a plan and start your digital project today.</p>
        </div>

        <div className="pricing-cards">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>
              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
              <button className="btn primary">{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
