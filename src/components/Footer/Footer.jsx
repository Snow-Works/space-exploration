
import "./Footer.css";
import logo from "../../assets/space_exploration_logo.svg";

const Footer = () => {
    return (
        <footer className="footer-section">

            <div className="footer-main">

                <div className="footer-brand">
                    <img src={logo} alt="MCT-SPACE" />

                    <h2>MCT-SPACE</h2>

                    <p>
                        Exploring possibilities beyond
                        the boundaries of our world.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>EXPLORE</h3>
                    <a href="#about">About</a>
                    <a href="#technology">Technology</a>
                    <a href="#galaxy">Galaxy</a>
                    <a href="#satellite">Satellite</a>
                </div>

                <div className="footer-links">
                    <h3>CONNECT</h3>
                    <a href="mailto:info@mctspace.com">Email Us</a>
                    <a href="#explore">Get Started</a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} MCT-SPACE. ALL RIGHTS RESERVED.</p>

                <a href="#top">BACK TO TOP ↑</a>
            </div>

        </footer>
    );
};

export default Footer;
