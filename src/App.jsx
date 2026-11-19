
import React from "react";
import "./App.css";

import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Service from "./components/Servicecard"

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

    </div>
  );
};

export default App;
