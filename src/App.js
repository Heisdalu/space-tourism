import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import "./App.css";
import DestinationPage from "./pages/DestinationPage";
// import Navigation from "./components/Navigation/Navigation";
// import Home from "./components/Home/Home";
// import Destination from "./components/Destination/Destination";
// import Crew from "./components/Crew/Crew";
// import Technology from "./components/Technology/Technology";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/destination">
          <DestinationPage />
        </Route>

        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
