
import "./Galaxy.css";
import galaxy from "../../assets/galaxy.jpg";

const Galaxy = () => {
    return (
        <section className="galaxy-section" id="galaxy">

            <img
                src={galaxy}
                alt="Galaxy and distant stars"
                className="galaxy-background"
            />

            <div className="galaxy-overlay"></div>

            <div className="galaxy-content reveal">

                <span className="section-tag">
                    THE INFINITE UNIVERSE
                </span>

                <h2>
                    BILLIONS OF
                    <br />
                    <span>GALAXIES.</span>
                </h2>

                <p>
                    Every star holds a story.
                    Every galaxy reveals another possibility.
                    The universe is waiting to be explored.
                </p>

                <a href="#satellite" className="galaxy-button">
                    EXPLORE THE UNIVERSE <span>↗</span>
                </a>

            </div>

            <div className="galaxy-bottom">
                <span>BEYOND OUR SOLAR SYSTEM</span>
                <span>∞ THE UNIVERSE IS LIMITLESS</span>
            </div>

        </section>
    );
};

export default Galaxy;
