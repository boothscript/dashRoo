import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import colors from "./Themes/colors";
import "./pageTransitions/pageSwipe.css";
import MorningRoutine from "./Scenes/MorningRoutine/MorningRoutine";
import Done from "./Scenes/Done/Done";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Router>
        <Route exact path="/" component={MorningRoutine} />
        <Route exact path="/done" component={Done} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
