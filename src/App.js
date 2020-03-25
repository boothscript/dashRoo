import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { MrRate, MrGoal, MrGratitude } from "./Pages/mr";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/mr/rate">
          <MrRate />
        </Route>
        <Route path="/mr/gratitude">
          <MrGratitude />
        </Route>
        <Route path="/mr/goal">
          <MrGoal />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
