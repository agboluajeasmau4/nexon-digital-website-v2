import React from "react";
import "./TrustStrip.css";

const TrustStrip = () => {
  return (
    <section className="trust-strip">

      {/* METRICS ROW */}
      <div className="trust-container">
        <div className="trust-item">
          <span>💼</span>
          <p>Trusted by <strong>30+ Businesses</strong></p>
        </div>

        <div className="trust-item">
          <span>📈</span>
          <p><strong>₦50M+</strong> Revenue Generated</p>
        </div>

        <div className="trust-item">
          <span>⭐</span>
          <p><strong>5-Star</strong> Reviews</p>
        </div>
      </div>

      {/* LOGOS ROW */}
      <div className="trust-logos">
        <p className="trust-subtitle">
          Trusted by businesses including:
        </p>

        <div className="logos-row">
          <span>Dell</span>
          <span>GenX</span>
          <span>Quantum</span>
          <span>Defina</span>
        </div>
      </div>

    </section>
  );
};

export default TrustStrip;