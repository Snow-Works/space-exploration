import React from "react";
import logo from "../assets/space_exploration_logo.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <div className="navbar-content">

                    <div className="navbar-brand">
                        <img src={logo} alt="MCT Space Logo" className="navbar-logo" />
                        <span>MCT-SPACE</span>
                    </div>

                    <div className="navbar-navigation">
                        <ul className="navbar-links">
                            <li>
                                <a href="#">Exploration</a>
                            </li>
                            <li>
                                <a href="#">Technology</a>
                            </li>
                            <li>
                                <a href="#">Galaxy</a>
                            </li>
                            <li>
                                <a href="#">Satellite</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;