import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import "./App.css";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechPage from "./pages/TechPage";

const App = () => {
  return (
    <Layout >
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


        <Route path="/crew">
          <CrewPage />
        </Route>

        <Route path="/technology">
          <TechPage />
        </Route>

        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
