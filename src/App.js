import React from "react";
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

const App = () => {
  return <div className="main-wrapper">
   <Navigation />
   <Home />
  </div>
}

export default App;
