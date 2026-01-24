// import "./services.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

// const Services = () => {
//   return (
//     <>
//       <Navbar />

//       <section className="services-page">
//         <div className="container">

//           {/* HEADER */}
//           <header className="services-header">
//             <h1>Services & Pricing</h1>
//             <p>
//               Flexible payment options for businesses of all sizes.
//             </p>
//           </header>

//           {/* ================= ONE-TIME PRICING ================= */}
//           <h2 className="section-title">One-Time Website Packages</h2>

//           <div className="pricing-grid">

//             <div className="pricing-box">
//               <h3>Starter</h3>
//               <p className="price">₦150,000</p>
//               <ul>
//                 <li>One-page website</li>
//                 <li>Mobile responsive</li>
//                 <li>Basic SEO</li>
//                 <li>Contact form</li>
//                 <li>7-day delivery</li>
//               </ul>
//               <button className="btn primary">Get Starter</button>
//             </div>

//             <div className="pricing-box popular">
//               <span className="badge">Most Popular</span>
//               <h3>Growth</h3>
//               <p className="price">₦300,000</p>
//               <ul>
//                 <li>Multi-page website</li>
//                 <li>Custom UI/UX</li>
//                 <li>SEO optimization</li>
//                 <li>Lead forms</li>
//                 <li>14-day delivery</li>
//               </ul>
//               <button className="btn primary">Choose Growth</button>
//             </div>

//             <div className="pricing-box">
//               <h3>Premium</h3>
//               <p className="price">₦600,000</p>
//               <ul>
//                 <li>Web app / E-commerce</li>
//                 <li>Advanced SEO</li>
//                 <li>Performance optimization</li>
//                 <li>Admin dashboard</li>
//                 <li>30-day support</li>
//               </ul>
//               <button className="btn primary">Book a Call</button>
//             </div>

//           </div>

//           {/* ================= SUBSCRIPTION ================= */}
//           <h2 className="section-title">Monthly Website Subscription</h2>
//           <p className="section-subtext">
//             No large upfront cost. Your website stays live as long as you subscribe.
//           </p>

//           <div className="pricing-grid">

//             <div className="pricing-box">
//               <h3>Basic</h3>
//               <p className="price">₦5,000 <span>/ month</span></p>
//               <ul>
//                 <li>1–3 pages</li>
//                 <li>Hosting included</li>
//                 <li>Free SSL</li>
//                 <li>Free domain (1st year)</li>
//               </ul>
//               <Link to="/subscribe?plan=basic" className="btn primary">
//                 Start Now
//               </Link>
//             </div>

//             <div className="pricing-box popular">
//               <span className="badge">Recommended</span>
//               <h3>Business</h3>
//               <p className="price">₦10,000 <span>/ month</span></p>
//               <ul>
//                 <li>Up to 5 pages</li>
//                 <li>Custom UI</li>
//                 <li>WhatsApp integration</li>
//                 <li>Monthly maintenance</li>
//               </ul>
//               <Link to="/subscribe?plan=business" className="btn primary">
//                 Start Business
//               </Link>
//             </div>

//             <div className="pricing-box">
//               <h3>Pro</h3>
//               <p className="price">₦20,000 <span>/ month</span></p>
//               <ul>
//                 <li>Up to 10 pages</li>
//                 <li>Advanced SEO</li>
//                 <li>Speed optimization</li>
//                 <li>Priority support</li>
//               </ul>
//               <Link to="/subscribe?plan=pro" className="btn primary">
//                 Go Pro
//               </Link>
//             </div>

//           </div>

//           <p className="note">
//             * Minimum commitment: 6 months. Website is suspended if payments stop.
//           </p>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Services;








import "./services.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Navbar />

      <section className="services-page">
        <div className="container">

          {/* HEADER */}
          <header className="services-header">
            <h1>Services & Pricing</h1>
            <p>
              Flexible payment options for businesses of all sizes.
            </p>
          </header>

                    {/* ================= ONE-TIME PRICING ================= */}
            <h2 className="section-title">One-Time Website Packages</h2>

            <div className="pricing-grid">

              <div className="pricing-box">
                <h3>Starter</h3>
                <p className="price">₦150,000</p>
                <ul>
                  <li>One-page website</li>
                  <li>Mobile responsive</li>
                  <li>Basic SEO</li>
                  <li>Contact form</li>
                  <li>7-day delivery</li>
                </ul>
                {/* Link to your form or WhatsApp */}
                <a 
                  href="https://wa.me/234808587035?text=I'm%20interested%20in%20Starter%20plan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn primary"
                >
                  Get Starter
                </a>
              </div>

              <div className="pricing-box popular">
                <span className="badge">Most Popular</span>
                <h3>Growth</h3>
                <p className="price">₦300,000</p>
                <ul>
                  <li>Multi-page website</li>
                  <li>Custom UI/UX</li>
                  <li>SEO optimization</li>
                  <li>Lead forms</li>
                  <li>14-day delivery</li>
                </ul>
                <a 
                  href="https://wa.me/234808587035?text=I'm%20interested%20in%20Growth%20plan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn primary"
                >
                  Choose Growth
                </a>
              </div>

              <div className="pricing-box">
                <h3>Premium</h3>
                <p className="price">₦600,000</p>
                <ul>
                  <li>Web app / E-commerce</li>
                  <li>Advanced SEO</li>
                  <li>Performance optimization</li>
                  <li>Admin dashboard</li>
                  <li>30-day support</li>
                </ul>
                <a 
                  href="https://wa.me/2348085870358?text=I'm%20interested%20in%20Premium%20plan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn primary"
                >
                  Book a Call
                </a>
              </div>

            </div>


          {/* ================= SUBSCRIPTION ================= */}
          <h2 className="section-title">Monthly Website Subscription</h2>
          <p className="section-subtext">
            No large upfront cost. Your website stays live as long as you subscribe.
          </p>

          <div className="pricing-grid">

            <div className="pricing-box">
              <h3>Basic</h3>
              <p className="price">₦5,000 <span>/ month</span></p>
              <ul>
                <li>1–3 pages</li>
                <li>Hosting included</li>
                <li>Free SSL</li>
                <li>Free domain (1st year)</li>
              </ul>
              <Link to="/subscribe?plan=basic" className="btn primary">
                Start Now
              </Link>
            </div>

            <div className="pricing-box popular">
              <span className="badge">Recommended</span>
              <h3>Business</h3>
              <p className="price">₦10,000 <span>/ month</span></p>
              <ul>
                <li>Up to 5 pages</li>
                <li>Custom UI</li>
                <li>WhatsApp integration</li>
                <li>Monthly maintenance</li>
              </ul>
              <Link to="/subscribe?plan=business" className="btn primary">
                Start Business
              </Link>
            </div>

            <div className="pricing-box">
              <h3>Pro</h3>
              <p className="price">₦20,000 <span>/ month</span></p>
              <ul>
                <li>Up to 10 pages</li>
                <li>Advanced SEO</li>
                <li>Speed optimization</li>
                <li>Priority support</li>
              </ul>
              <Link to="/subscribe?plan=pro" className="btn primary">
                Go Pro
              </Link>
            </div>

          </div>

          <p className="note">
            * Minimum commitment: 6 months. Website is suspended if payments stop.
          </p>

          {/* ================= HOW IT WORKS ================= */}
                  <section class="how-it-works">
          <h2 class="section-title">How It Works</h2>
          <p class="section-subtext">
            Simple steps. No confusion. We guide you all the way.
          </p>

          <div class="how-grid">
            <div class="how-card">
              <div class="how-icon">📝</div>
              <h3>Choose a Service</h3>
              <p>Select a package or one-time service that fits your business goals.</p>
            </div>

            <div class="how-card">
              <div class="how-icon">📩</div>
              <h3>Fill the Form</h3>
              <p>Tell us about your brand so we can tailor everything to you.</p>
            </div>

            <div class="how-card">
              <div class="how-icon">💬</div>
              <h3>Chat on WhatsApp</h3>
              <p>We reach out to confirm details and align expectations.</p>
            </div>

            <div class="how-card">
              <div class="how-icon">🚀</div>
              <h3>We Get to Work</h3>
              <p>Your project kicks off and progress updates begin.</p>
            </div>
          </div>
        </section>


                  {/* ================= WHO EACH PLAN IS FOR ================= */}
                <section class="plan-fit">
          <h2 class="section-title">Who Each Plan Is For</h2>
          <p class="section-subtext">
            Choose the plan that matches where your business is right now.
          </p>

          <div class="plan-fit-grid">
            <div class="plan-fit-card">
              <span class="plan-tag">Starter</span>
              <h3>New & Growing Brands</h3>
              <p>
                Perfect if you’re just starting out and need a clean, professional
                online presence without stress.
              </p>
              <ul>
                <li>✔ First-time website owners</li>
                <li>✔ Small businesses & freelancers</li>
                <li>✔ Tight budgets, clear goals</li>
              </ul>
            </div>

            <div class="plan-fit-card highlight">
              <span class="plan-tag">Most Popular</span>
              <h3>Businesses Ready to Scale</h3>
              <p>
                Ideal for brands that want more visibility, conversions,
                and consistent growth.
              </p>
              <ul>
                <li>✔ Established small businesses</li>
                <li>✔ Brands ready to attract clients</li>
                <li>✔ Owners who want results</li>
              </ul>
            </div>

            <div class="plan-fit-card">
              <span class="plan-tag">Advanced</span>
              <h3>Serious Brands & Companies</h3>
              <p>
                Best for businesses that need advanced features, automation,
                and a strong digital system.
              </p>
              <ul>
                <li>✔ Scaling companies</li>
                <li>✔ Custom requirements</li>
                <li>✔ Long-term growth plans</li>
              </ul>
            </div>
          </div>
        </section>


                  {/* ================= ADD-ONS ================= */}
                  <section class="addons">
          <h2 class="section-title">Optional Add-Ons</h2>
          <p className="section-subtext">
            Enhance your website with powerful extras whenever you’re ready.
          </p>

          <div class="addons-grid">

            <div class="addon-card">
              <div class="addon-icon">⚡</div>
              <h3>Website Speed Optimization</h3>
              <p>
                Faster load times for better user experience and SEO.
              </p>
              <span class="addon-price">₦30,000</span>
            </div>

            <div class="addon-card">
              <div class="addon-icon">📝</div>
              <h3>Website Content Writing</h3>
              <p>
                Professionally written content that converts visitors into clients.
              </p>
              <span class="addon-price">₦40,000</span>
            </div>

            <div class="addon-card">
              <div class="addon-icon">🔒</div>
              <h3>Advanced Security Setup</h3>
              <p>
                Extra protection against hacks and vulnerabilities.
              </p>
              <span class="addon-price">₦25,000</span>
            </div>

            <div class="addon-card">
              <div class="addon-icon">📈</div>
              <h3>SEO Setup</h3>
              <p>
                On-page SEO to help your website rank on Google.
              </p>
              <span class="addon-price">₦50,000</span>
            </div>

            <div class="addon-card">
              <div class="addon-icon">💬</div>
              <h3>WhatsApp Live Chat</h3>
              <p>
                Let customers reach you instantly from your website.
              </p>
              <span class="addon-price">₦15,000</span>
            </div>

            <div class="addon-card">
              <div class="addon-icon">📊</div>
              <h3>Google Analytics Setup</h3>
              <p>
                Track visitors, traffic sources, and conversions.
              </p>
              <span class="addon-price">₦20,000</span>
            </div>

          </div>

          <p class="note">
            Add-ons can be requested during signup or added later.
          </p>
        </section>


                  {/* ================= TRUST ================= */}
                <section class="trust">
          <h2 class="section-title">Why Clients Choose Nexon</h2>
          <p class="section-subtext">
            We don’t just build websites — we build tools that grow businesses.
          </p>

          <div class="trust-grid">

            <div class="trust-card">
              <div class="trust-icon">🎯</div>
              <h3>Business-Focused Strategy</h3>
              <p>
                Every website is designed with one goal in mind — converting visitors
                into customers.
              </p>
            </div>

            <div class="trust-card">
              <div class="trust-icon">📱</div>
              <h3>Mobile-First & SEO-Ready</h3>
              <p>
                Your website looks great on all devices and is optimized for search
                engines from day one.
              </p>
            </div>

            <div class="trust-card">
              <div class="trust-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>
                Clear timelines, quick turnaround, and no unnecessary delays.
              </p>
            </div>

            <div class="trust-card">
              <div class="trust-icon">💰</div>
              <h3>Transparent Pricing</h3>
              <p>
                No hidden fees. No surprises. You know exactly what you’re paying for.
              </p>
            </div>

            <div class="trust-card">
              <div class="trust-icon">🤝</div>
              <h3>Reliable Support</h3>
              <p>
                We don’t disappear after launch. We support you as your business grows.
              </p>
            </div>

          </div>

          <div class="trust-proof">
            <p>
              Trusted by growing businesses across Nigeria.
            </p>
          </div>
        </section>


                  {/* ================= FAQ ================= */}
                <section class="faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtext">
            Everything you need to know before getting started with Nexon.
          </p>

          <div class="faq-list">

            <details class="faq-item">
              <summary>Do I need to pay everything upfront?</summary>
              <p>
                No. You can choose our monthly subscription plans to spread payments
                over time, or pay once if you prefer a one-time package.
              </p>
            </details>

            <details class="faq-item">
              <summary>What happens if I stop my subscription?</summary>
              <p>
                Your website remains yours. If payments stop, the site is temporarily
                suspended and can be reactivated once payment resumes.
              </p>
            </details>

            <details class="faq-item">
              <summary>Will my website be live on my own domain?</summary>
              <p>
                Yes. Your website is hosted on your own domain with SSL security.
                You fully own your website and brand assets.
              </p>
            </details>

            <details class="faq-item">
              <summary>Can I upgrade or change my plan later?</summary>
              <p>
                Absolutely. You can upgrade or downgrade your plan anytime as your
                business grows.
              </p>
            </details>

            <details class="faq-item">
              <summary>Do you help with website content?</summary>
              <p>
                Yes. We can assist with website copy, structure, and optimization.
                Full copywriting is also available as an add-on.
              </p>
            </details>

            <details class="faq-item">
              <summary>How long does it take to build my website?</summary>
              <p>
                Delivery depends on the plan you choose. Starter websites take as little
                as 7 days, while advanced projects may take longer.
              </p>
            </details>

            <details class="faq-item">
              <summary>Is Nexon suitable for small businesses?</summary>
              <p>
                Yes. Our services are designed specifically for startups, small
                businesses, and growing brands that need results without huge costs.
              </p>
            </details>

            <details class="faq-item">
              <summary>What if I’m not sure which plan to choose?</summary>
              <p>
                No problem. Book a free consultation and we’ll help you choose the best
                plan based on your goals and budget.
              </p>
            </details>

          </div>

          <div class="faq-cta">
            <p>Still have questions?</p>
            <a href="/contact" class="btn primary">Talk to Nexon</a>
          </div>
        </section>


                  {/* ================= FINAL CTA ================= */}
                  <section className="final-cta">
                    <h2>Not sure which plan is right for you?</h2>
                    <div className="cta-buttons">
                      <button className="btn primary">Book a Free Consultation</button>
                      <a
                        href="https://wa.me/234808587035"
                        target="_blank"
                        className="btn secondary"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </section>

                </div>
              </section>

              <Footer />
            </>
          );
        };

        export default Services;
