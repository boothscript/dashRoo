import React from "react";

import { ThemeProvider } from "styled-components";

import { MrContextProvider } from "./Scenes/MorningRoutine/Context/MorningRoutine";
import colors from "./Themes/colors";
import "./pageTransitions/pageSwipe.css";
import MorningRoutine from "./Scenes/MorningRoutine/MorningRoutine";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <MrContextProvider>
        <MorningRoutine />
      </MrContextProvider>
    </ThemeProvider>
  );
}

export default App;
