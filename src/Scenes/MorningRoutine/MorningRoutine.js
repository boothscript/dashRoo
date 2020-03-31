import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useTransition, animated } from "react-spring";

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
    advanceState,
    getStateNumber
  } = useContext(MrContext);

  const dynamicLinks = {
    rate: {
      inputs: ratings,
      nextPage: "/mr/gratitude",
      prevPage: "/",
      buttonText: "next",
      options: { renderBackButton: false }
    },
    gratitude: {
      inputs: gratitude,
      nextPage: "/mr/goal",
      prevPage: "/mr/rate",
      buttonText: "next",
      options: { renderBackButton: true }
    },
    goal: {
      inputs: goal,
      nextPage: "/dash",
      prevPage: "/mr/gratitude",
      buttonText: "finish",
      options: { renderBackButton: true }
    }
  };

  const transitionSets = {
    fwd: {
      from: { opacity: 0, transform: "translateX(150%)" },
      enter: { opacity: 1, transform: "translateX(0)" },
      leave: { opacity: 0, transform: "translateX(-150%)" }
    },
    back: {
      from: { opacity: 0, transform: "translateX(-150%)" },
      enter: { opacity: 1, transform: "translateX(0)" },
      leave: { opacity: 0, transform: "translateX(150%)" }
    }
  };

  const reverse = true;
  const location = useLocation();
  const transitions = useTransition(
    location,
    location => location.pathname,
    transitionSets[mrState.direction]
  );

  return (
    <MrContainer className="page">
      <MrHeader />
      <MrWrapper>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            className="main"
            style={{ ...props, height: "100%" }}
          >
            <Switch location={item}>
              <Route path="/mr/rate" component={MrRate} />
              <Route path="/mr/gratitude" component={MrGratitude} />
              <Route path="/mr/goal" component={MrGoal} />
            </Switch>
          </animated.div>
        ))}
      </MrWrapper>
      <MrFooter
        fieldsCompleted={checkInputs(dynamicLinks[mrState.state].inputs)}
        nextPage={dynamicLinks[mrState.state]["nextPage"]}
        prevPage={dynamicLinks[mrState.state]["prevPage"]}
        buttonText={dynamicLinks[mrState.state]["buttonText"]}
        submitFunc={advanceState}
        options={dynamicLinks[mrState.state]["options"]}
      />
    </MrContainer>
  );
}

export default MorningRoutine;
