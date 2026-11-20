
import React from "react";
import "./App.css";

import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Service from "./components/Service/Servicecard"
import About from "./components/About/About";
import Technology from "./components/Technology/Technology";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="hero-section">

        <video
          autoPlay
          loop
          muted
          className="hero-background-video"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <Navbar />
        <Hero />
        
      </div>
      <Service />

      <About />

      <Technology />

    </div>
  );
};

export default App;
