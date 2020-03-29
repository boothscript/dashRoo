import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MrRate, MrGoal, MrGratitude } from "./Pages/mr";
import { MrContextProvider } from "./Context/MorningRoutine";
import colors from "./Themes/colors";
import "./pageTransitions/pageSwipe.css";

function App() {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <MrContextProvider>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="swipe"
                  unmountOnExit
                >
                  <Switch location={location}>
                    <Route path="/mr/rate" component={MrRate} />
                    <Route path="/mr/gratitude" component={MrGratitude} />
                    <Route path="/mr/goal" component={MrGoal} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </MrContextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
