import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact">
        <div className="container">

          {/* HERO */}
          <div className="contact-hero">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you. Let’s talk.</p>
          </div>

          {/* MAIN */}
          <div className="contact-wrapper">

            {/* LEFT - INFO */}
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Email: nexondigital@email.com</p>
              <p>Location: Nigeria</p>
            </div>

            {/* RIGHT - FORM */}
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>

              <button type="submit" className="btn primary">
                Send Message
              </button>
            </form>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;