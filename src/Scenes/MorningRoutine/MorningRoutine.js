import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { MrHeader, MrContainer, MrFooter, MrWrapper } from "./Components";
import { MrRate, MrGratitude, MrGoal } from "./Scenes";

import { MrContext } from "./Context/MorningRoutine";

function MorningRoutine() {
  const {
    ratings,
    gratitude,
    goal,
    checkInputs,
    mrState,
    advanceState
  } = useContext(MrContext);

  const dynamicLinks = {
    rate: {
      inputs: ratings,
      nextPage: "/mr/gratitude",
      buttonText: "next"
    },
    gratitude: {
      inputs: gratitude,
      nextPage: "/mr/goal",
      buttonText: "next"
    },
    goal: {
      inputs: goal,
      nextPage: "/dash",
      buttonText: "finish"
    }
  };

  return (
    <Router>
      <MrContainer className="page">
        <MrHeader />
        <Route
          render={({ location }) => (
            <TransitionGroup component={MrWrapper}>
              <CSSTransition
                key={location.key}
                timeout={350}
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
        <MrFooter
          fieldsCompleted={checkInputs(dynamicLinks[mrState].inputs)}
          nextPage={dynamicLinks[mrState]["nextPage"]}
          buttonText={dynamicLinks[mrState]["buttonText"]}
          submitFunc={advanceState}
        />
      </MrContainer>
    </Router>
  );
}

export default MorningRoutine;
