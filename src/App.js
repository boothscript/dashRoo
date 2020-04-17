import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import colors from './Themes/colors';

import MorningRoutine from './Scenes/MorningRoutine/MorningRoutine';
import Dash from './Scenes/Dash/Dash';
import { MorningRoutineContextProvider } from './lib/Context/MorningRoutineContext';
import { TimerStackContextProvider } from './lib/Context/timerStackContext';

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Router>
        <MorningRoutineContextProvider>
          <TimerStackContextProvider>
            <Switch>
              <Route exact path="/" component={MorningRoutine} />
              <Route exact path="/dash" component={Dash} />
            </Switch>
          </TimerStackContextProvider>
        </MorningRoutineContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
