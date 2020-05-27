import React from "react";
import { Route, Switch } from "react-router-dom";

import RegionSelection from "./RegionSelection";
import Navigation from "./Navigation";

class App extends React.Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path="/" exact component={RegionSelection}/>
            <Route path="/" exact component={RegionSelection}/>
          </Switch>
        <Navigation/>
      </div>
    );
  }
};

export default App;
