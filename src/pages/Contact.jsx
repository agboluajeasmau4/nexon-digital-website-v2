import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact container">
        <h1>Contact Nexon Digital</h1>
        <p>Tell us about your project. We respond within 24 hours.</p>

        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Project details"></textarea>
          <button className="btn primary">Send Message</button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
