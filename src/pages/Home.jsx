import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
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
