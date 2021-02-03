import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./center-side.scss";
import Boards from "./comps/Boards/Boards";
import Home from "./comps/Home";
import Templates from "./comps/Templates";

function CenterSide() {
  return (
    <div className="center-side">
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route
          path="/home"
          exact
          component={() => (
            <>
              <Home />
              <Home />
            </>
          )}
        />
        <Route path="/boards" exact component={() => <Boards />} />
        <Route path="/templates" exact component={() => <Templates />} />
      </Switch>
    </div>
  );
}

export default CenterSide;
