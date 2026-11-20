
import "./Satellite.css";

const Satellite = () => {
    return (
        <section className="satellite-section" id="satellite">

            <div className="satellite-content reveal">

                <span className="section-tag">
                    ORBITAL EXPLORATION
                </span>

                <h2>
                    CONNECTING
                    <br />
                    <span>OUR WORLD.</span>
                </h2>

                <p>
                    Satellites have transformed how humanity
                    communicates, observes and understands
                    our planet.
                </p>

                <div className="satellite-features">

                    <div>
                        <span>01</span>
                        <p>Earth Observation</p>
                    </div>

                    <div>
                        <span>02</span>
                        <p>Global Connectivity</p>
                    </div>

                    <div>
                        <span>03</span>
                        <p>Orbital Research</p>
                    </div>

                </div>

                <a href="#explore" className="text-link">
                    DISCOVER MORE <span>↗</span>
                </a>

            </div>

            <div className="satellite-image reveal">
                <img
                    src="/assets/satellite.jpg"
                    alt="Satellite orbiting planet Earth"
                />

                <div className="satellite-image-caption">
                    EARTH ORBIT / SATELLITE SYSTEMS
                </div>
            </div>

        </section>
    );
};

export default Satellite;
