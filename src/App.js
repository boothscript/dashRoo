import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserDataContextProvider } from "./Context/Data";
import { ThemeProvider } from "styled-components";

import colors from "./Themes/colors";

import MorningRoutine from "./Scenes/MorningRoutine/MorningRoutine";
import Done from "./Scenes/Done/Done";
import Dash from "./Scenes/Dash/Dash";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <UserDataContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={MorningRoutine} />
            <Route exact path="/done" component={Done} />
            <Route exact path="/dash" component={Dash} />
          </Switch>
        </Router>
      </UserDataContextProvider>
    </ThemeProvider>
  );
}

export default App;
