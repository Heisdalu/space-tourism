import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";

const App = () => {
  return (
    <div className="main-wrapper">
      <Navigation />
      <div className="subWrapper">
        {/* <Home /> */}
        {/* <Destination /> */}
        <Crew />
        </div>
    </div>
  );
};

export default App;
