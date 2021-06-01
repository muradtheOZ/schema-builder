import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Component/Home/Home";
import Presets from "./Component/Presets/Presets";
import Project from "./Component/Project/Project";
import Entity from "./Component/Entity/Entity";
import Layer from "./Component/Layer/Layer";
import Navigationbar from "./Component/Navigationbar/Navigationbar";


function App() {
  return (
    <Router>
    <Navigationbar/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/project">
          <Project/>
        </Route>
        <Route path="/entity">
          <Entity/>
        </Route>
        <Route path="/layer">
          <Layer/>
        </Route>
        <Route path="/preset">
          <Presets/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
