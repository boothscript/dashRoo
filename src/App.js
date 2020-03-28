import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { MrRate, MrGoal, MrGratitude } from "./Pages/mr";
import { MrContextProvider } from "./Context/MorningRoutine";
import colors from "./Themes/colors";

function App() {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <MrContextProvider>
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
        </MrContextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
