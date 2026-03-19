
import React from "react";  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicePage from "./pages/Services";
import Subscribe from "./pages/Subscribe";
import Portfolio from "./pages/Portfolio";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/nexon-digital-website-v2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<ServicePage />} />
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} /> {/* fallback for unknown paths */}
      </Routes>
    </Router>
  );
}

export default App;
