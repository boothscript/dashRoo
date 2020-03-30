import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { MrContextProvider } from "./Scenes/MorningRoutine/Context/MorningRoutine";
import colors from "./Themes/colors";
import "./pageTransitions/pageSwipe.css";
import MorningRoutine from "./Scenes/MorningRoutine/MorningRoutine";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <MrContextProvider>
        <Router>
          <MorningRoutine />
        </Router>
      </MrContextProvider>
    </ThemeProvider>
  );
}

export default App;
