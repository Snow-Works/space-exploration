
import React, { useState } from "react";
import logo from "../../assets/space_exploration_logo.svg";
import AuthModal from "../Auth/AuthModal";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState("login");

    const openAuth = (mode) => {
        setAuthMode(mode);
        setAuthOpen(true);
        setMenuOpen(false);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className="navbar-wrapper">
                <div className="navbar-container">

                    <div className="navbar-content">

                        {/* BRAND */}
                        <a href="#top" className="navbar-brand">
                            <img
                                src={logo}
                                alt="MCT Space Logo"
                                className="navbar-logo"
                            />
                            <span>MCT-SPACE</span>
                        </a>

                        
{/* NAVIGATION */}

<nav
    id="mobile-navigation"
    className={`navbar-navigation ${menuOpen ? "active" : ""}`}
>
    <ul className="navbar-links">
        <li>
            <a href="#top" onClick={closeMenu}>Exploration</a>
        </li>

        <li>
            <a href="#technology" onClick={closeMenu}>Technology</a>
        </li>

        <li>
            <a href="#galaxy" onClick={closeMenu}>Galaxy</a>
        </li>

        <li>
            <a href="#satellite" onClick={closeMenu}>Satellite</a>
        </li>
    </ul>

    <div className="mobile-auth-buttons">
        <button
            className="mobile-sign-in"
            onClick={() => openAuth("login")}
        >
            Sign in
        </button>

        <button
            className="mobile-sign-up"
            onClick={() => openAuth("signup")}
        >
            Sign up
        </button>
    </div>
</nav>



                        {/* DESKTOP BUTTONS */}
                        <div className="navbar-buttons">

                            <button
                                className="sign-in"
                                onClick={() => openAuth("login")}
                            >
                                Sign in
                            </button>

                            <button
                                className="sign-up"
                                onClick={() => openAuth("signup")}
                            >
                                Sign up
                            </button>

                        </div>

                        {/* HAMBURGER */}
                        <button
                            className={`hamburger ${
                                menuOpen ? "open" : ""
                            }`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={
                                menuOpen ? "Close menu" : "Open menu"
                            }
                            aria-expanded={menuOpen}
                            aria-controls="mobile-navigation"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                    </div>
                </div>
            </header>

            {/* AUTHENTICATION MODAL */}
            <AuthModal
                isOpen={authOpen}
                onClose={() => setAuthOpen(false)}
                initialMode={authMode}
                onSwitchMode={setAuthMode}
            />
        </>
    );
};

export default Navbar;
