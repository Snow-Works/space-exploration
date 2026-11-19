import React from "react";
import "./Servicecard.css";
import bgGif from "../assets/Sci-Fi.gif"
import rocket from "../assets/rocket.png"
import network from "../assets/network.png"
import cloud from "../assets/cloud.png"



const Service = () => {
    return (
        <section className="service-section">

            {/* Animated Background */}
            <img
                src={bgGif}
                alt=""
                aria-hidden="true"
                className="service-background-gif"
            />

            {/* Background Overlay */}
            <div className="service-overlay"></div>

            {/* Section Content */}
            <div className="service-content">




                <div className="cards">
                    <img
                src={rocket}
                alt=""
                aria-hidden="true"
                className="card-photo"
            />

                    <div className="card-content">
                        <h1>HST</h1>
                        <h2>500 - 18,000KM</h2>
                        <p>Used for observation and survailance, capturing and tracking images of the planets.</p>
                    </div>
                </div>

                <div className="cards">

                    <img
                src={network}
                alt=""
                aria-hidden="true"
                className="card-photo"
            />
                    <div className="card-content">
                        <h1>ISS</h1>
                        <h2>300 - 16,000KM</h2>
                        <p>A hildado Artificial Intelligence Satelite Rocket, orbiting earth and detecting galaxy balance.</p>
                    </div>
                </div>

                <div className="cards">
                    <img
                src={cloud}
                alt=""
                aria-hidden="true"
                className="card-photo"
            />
                    
                    <div className="card-content">
                        <h1>GPS</h1>
                        <h2>400 - 15,000KM</h2>
                        <p>Turing part of the Orbital Positioning, System GPS used for networking.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Service;
