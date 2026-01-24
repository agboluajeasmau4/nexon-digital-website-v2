import "./subscribe.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


const Subscribe = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xlggjbjo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <section className="subscribe-page">
        <div className="container">

          {!submitted ? (
            <>
              <h1>Start Your Website Subscription</h1>
              <p>Fill the form below and we’ll contact you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="subscribe-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="text"
                  name="business"
                  placeholder="Business Name"
                />

                <select name="plan" defaultValue={selectedPlan} required>
                  <option value="">Select a Plan</option>
                  <option value="Basic – ₦5,000/month">
                    Basic – ₦5,000 / month
                  </option>
                  <option value="Business – ₦10,000/month">
                    Business – ₦10,000 / month
                  </option>
                  <option value="Pro – ₦20,000/month">
                    Pro – ₦20,000 / month
                  </option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us briefly about your business (optional)"
                />

                <button type="submit" className="btn primary" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Subscription"}
                </button>
              </form>

              <p className="note">
                Minimum commitment: 6 months. Website remains live while subscription is active.
              </p>
            </>
          ) : (
            /* SUCCESS STATE */
            <div className="success-box">
              <h2>✅ Subscription Successful</h2>
              <p>
                Thank you for subscribing!  
                Our team will contact you within <strong>24 hours</strong> to
                begin your onboarding.
              </p>

              <p className="muted">
                If you have urgent questions, feel free to reach out via WhatsApp.
              </p>
               <Link to="/services" className="btn outline back-btn">
             ← Back to Services
                 </Link>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Subscribe;
