import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import WhyChooseUs from "../sections/WhyChooseUs";
import Testimonials from "../sections/Testimonials";
import CTASection from "../sections/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
