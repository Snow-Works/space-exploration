
import "./Explore.css";

const Explore = () => {
    return (
        <section className="explore-section" id="explore">

            <div className="explore-content reveal">

                <span className="section-tag">
                    YOUR JOURNEY STARTS HERE
                </span>

                <h2>
                    THE UNIVERSE
                    <br />
                    <span>HAS NO LIMITS.</span>
                </h2>

                <p>
                    Curiosity brought us this far.
                    Imagination will take us further.
                </p>

                <a href="mailto:info@mctspace.com" className="explore-button">
                    LET'S EXPLORE
                </a>

            </div>

            <div className="explore-decoration">
                <span>∞</span>
            </div>

        </section>
    );
};

export default Explore;
