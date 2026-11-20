import "./About.css";
import spacepic from "../../assets/about-space.jpg";

const About = () => {
    return(
        <section className="about-section">

            <div className="about-image reveal">
                <img src={spacepic} alt="Astronaut exploring space" />

                <div className="about-image-label">
                    <span>OUR MISSION</span>
                    <span>BEYOUND LIMITS</span>
                </div>

            </div>

            <div className="about-content reveal">

                <span className="section-tag">
                    Discover MCT-SPACE
                </span>

                <h2>
                    Beyound what
                    <br />
                    <span>we know.</span>
                </h2>

                <p>
                    Space is more than an endless universe.
                    It represents the possibilities that exist
                    beyond our current understanding.
                </p>


                <p>
                    At MCT-SPACE, we explore the intersection
                    of science, technology and human curiosity
                    to inspire a deeper understanding of our universe.
                </p>

                 <a href="#technology" className="text-link">
                    DISCOVER OUR WORLD <span>↗</span>
                </a>



            </div>
        </section>

    );
};


export default About;