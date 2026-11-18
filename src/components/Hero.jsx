import React from "react";
import "./Hero.css";


const Hero = () => {
    return  (
        <div classname="hero-section">
            <div className="hero-content">
                <div className="hero-title">
                    <h1>ORBIT THE EARTH</h1>
                </div>
                <div className="hero-paragraph">
                    <p>Pushing the boundaries of human curiosity through space exploration, advanced technology, and bold discoveries. Join us as we venture into the unknown and redefine what's possible.</p>
                </div>
                <div className="hero-button">
                    <button className="hero-btn">Learn more</button>
                </div>
            </div>

        </div>

    );
};

export default Hero;