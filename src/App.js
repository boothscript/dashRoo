import React from "react";

import { ThemeProvider } from "styled-components";

import colors from "./Themes/colors";
import "./pageTransitions/pageSwipe.css";
import MorningRoutine from "./Scenes/MorningRoutine/MorningRoutine";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <MorningRoutine />
    </ThemeProvider>
  );
}

export default App;
