import React from "react";
import bgVideo from "./assets/earth-bg.mp4";

const App = () => {
  return <div>
    <div className="h-[700px] relative">
      <video autoPlay loop muted className="fixed top-0 left-0 w-full h-[700[px]] object-cover z[-1]">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Navbar />
    </div>
  </div>
};

export default App;