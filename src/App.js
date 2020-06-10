import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import colors from './Themes/colors';

import MorningRoutine2 from './Scenes/MorningRoutine/MorningRoutine2';
import Dash from './Scenes/Dash/Dash';
import Journal from './Scenes/Journal/Journal';
import Navbar from './Navbar/Navbar';
import { MorningRoutineContextProvider } from './lib/Context/MorningRoutineContext';
import { TimerStackContextProvider } from './lib/Context/timerStackContext';
import { HabitContextProvider } from './lib/Context/HabitContext';
import { WeekSelectorContextProvider } from './lib/Context/WeekSelectorContext';
import { JournalContextProvider } from './lib/Context/JournalContext';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr) max(1200px) minmax(0, 1fr);
  background: #828282;
`;

const DashGrid = styled.div`
  grid-column: 2/-2;
  grid-row: 1 / -1;
  display: grid;
  grid-template-rows: minmax(0, 1fr) 0px repeat(8, minmax(0, 1fr));
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 20px;
  padding: 10px;
  background: #0f1115;
  border-radius: 16px;
`;

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Router>
        <WeekSelectorContextProvider>
          <MorningRoutineContextProvider>
            <TimerStackContextProvider>
              <JournalContextProvider>
                <HabitContextProvider>
                  <Container>
                    <DashGrid>
                      <Navbar />

                      <Switch>
                        <Route exact path="/" component={MorningRoutine2} />
                        <Route exact path="/dash" component={Dash} />
                        <Route exact path="/journal" component={Journal} />
                      </Switch>
                    </DashGrid>
                  </Container>
                </HabitContextProvider>
              </JournalContextProvider>
            </TimerStackContextProvider>
          </MorningRoutineContextProvider>
        </WeekSelectorContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
