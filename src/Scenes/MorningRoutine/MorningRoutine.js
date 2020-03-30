import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
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

  const location = useLocation();
  console.log(location);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translateX(150%)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(-150%)" }
  });

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
        fieldsCompleted={checkInputs(dynamicLinks[mrState].inputs)}
        nextPage={dynamicLinks[mrState]["nextPage"]}
        buttonText={dynamicLinks[mrState]["buttonText"]}
        submitFunc={advanceState}
      />
    </MrContainer>
  );
}

export default MorningRoutine;
