import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./quote.css";

const Quote = () => {
  return (
    <>
      <Navbar />

      <section className="quote">
        <div className="quote-container">
          <h1>Get a Quote</h1>
          <p>
            Tell us about your project and we’ll get back to you with a custom
            quote.
          </p>

          <form className="quote-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" required />
            </div>

            <div className="form-group">
              <label>Project Type</label>
              <select required>
                <option value="">Select a service</option>
                <option>Website Design</option>
                <option>E-commerce</option>
                <option>UI/UX Design</option>
                <option>Website Redesign</option>
              </select>
            </div>

            <div className="form-group">
              <label>Budget</label>
              <select>
                <option value="">Select budget</option>
                <option>$100 - $500</option>
                <option>$500 - $1000</option>
                <option>$1000+</option>
              </select>
            </div>

            <div className="form-group">
              <label>Project Details</label>
              <textarea
                rows="5"
                placeholder="Describe your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn primary">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Quote;