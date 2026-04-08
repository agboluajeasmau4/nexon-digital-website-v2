import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./booking.css";

const Booking = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const plan = query.get("plan") || "Not selected";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    type: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleContinue = async (e) => {
  e.preventDefault();

  // Send to Formspree
  await fetch("https://formspree.io/f/xykbvrvq", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      ...formData,
      plan
    })
  });

  // Then go to calendar
  setStep(2);
};

  return (
    <section className="booking-page">
      <div className="container booking-container">

        {/* HEADER */}
        <div className="booking-header">
          <div className="booking-icon">📅</div>
          <h1>Book a Free Consultation</h1>
          <p>
            30 mins • Online Meeting
          </p>
        </div>

        {/* PLAN */}
        <div className="selected-plan">
          <span>You selected:</span>
          <strong>{plan.toUpperCase()}</strong>
        </div>

        {/* STEP INDICATOR */}
        <div className="steps">
          <div className={step === 1 ? "step active" : "step"}>
            1. Your Details
          </div>
          <div className={step === 2 ? "step active" : "step"}>
            2. Pick a Time
          </div>
        </div>

        {/* STEP 1: FORM */}
        {step === 1 && (
          <form className="booking-form" onSubmit={handleContinue}>
            <div className="form-group">
              <label>Full Name</label>
              <input name="name" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Phone (WhatsApp)</label>
              <input name="phone" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Business Name</label>
              <input name="business" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Business Type</label>
              <select name="type" onChange={handleChange}>
                <option value="">Select</option>
                <option>Personal Brand</option>
                <option>Small Business</option>
                <option>E-commerce</option>
                <option>Startup</option>
              </select>
            </div>

            <div className="form-group">
              <label>What do you need?</label>
              <textarea name="message" rows="4" required onChange={handleChange} />
            </div>

            <button type="submit" className="btn primary">
              Continue to Booking
            </button>
          </form>
        )}

        {/* STEP 2: CALENDAR */}
        {step === 2 && (
          <div className="calendar-section">

            <p className="calendar-note">
              Select a date and time for your consultation.
            </p>

            {/* CALENDLY EMBED */}
            <iframe
              src={`https://calendly.com/nexondigital31/free-consultation?name=${formData.name}&email=${formData.email}`}
              width="100%"
              height="650"
              frameBorder="0"
              title="Booking Calendar"
            ></iframe>

          </div>
        )}

      </div>
    </section>
  );
};

export default Booking;