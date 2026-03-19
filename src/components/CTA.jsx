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

                    <Link to="/quote" className="btn primary">Get a Quote</Link>
                        <button className="btn secondary">Contact Us</button>

                </div>
            </div>
        </section>
    );
};
export default CTA;