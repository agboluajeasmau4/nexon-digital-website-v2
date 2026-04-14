import { Link } from "react-router-dom";
import "./cta.css";
const CTA = ()=>{
    return (
        <section className="cta">
            <div className="cta-container">
                <h2>Ready to build your next project?</h2>
                <p>Let Nexon Digital help you cretae a modern, fast, and high-converting website for your business</p>
                <div className="cta-buttons">   
                    {/* <button className="btn primary">Get a Free Quote</button> */}

                    <Link to="/book" className="btn primary">Book a Free Consultation</Link>
                        <Link to="/contact" className="btn secondary">Contact Us</Link>

                </div>
            </div>
        </section>
    );
};
export default CTA;