import React from "react";
import bgVideo from "./assets/earth-bg.mp4";

const App = () => {
  return <div>
    <div className="h-[700px] relative">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>
      
    </div>
  </div>
};

export default App;