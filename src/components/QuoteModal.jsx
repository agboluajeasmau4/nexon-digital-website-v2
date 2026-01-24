import { FiX } from "react-icons/fi";
import "./quoteModal.css";

const QuoteModal = ({ isOpen, onClose, selectedPlan }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>
          <FiX />
        </button>

        <h2>Start Your Project</h2>
        <p className="modal-sub">
          You selected: <strong>{selectedPlan}</strong>
        </p>

        {/* FORM */}
        <form className="quote-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />

          <select required>
            <option value="">Type of Website</option>
            <option>Business Website</option>
            <option>E-commerce</option>
            <option>Web App</option>
            <option>Portfolio</option>
          </select>

          <textarea placeholder="Tell us about your project"></textarea>

          <button type="submit" className="btn primary">
            Request Quote
          </button>
        </form>

        <div className="divider">OR</div>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/234XXXXXXXXXX?text=Hello%20Nexon%20Digital,%20I%20am%20interested%20in%20the%20${selectedPlan}%20package.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn whatsapp"
        >
          Chat on WhatsApp
        </a>

        <p className="note">
          We’ll contact you within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default QuoteModal;
