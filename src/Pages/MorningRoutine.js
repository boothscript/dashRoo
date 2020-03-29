import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { MrMain, MrHeader, MrContainer, MrFooter } from "../Components/mr";
import { MrRate, MrGratitude, MrGoal } from "./mr";

import { MrContext } from "../Context/MorningRoutine";

function MorningRoutine() {
  const {
    ratings,
    gratitude,
    goal,
    checkInputs,
    updateRatings,
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
