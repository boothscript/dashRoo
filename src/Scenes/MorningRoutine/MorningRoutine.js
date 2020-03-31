import React, { useState } from "react";

import { MrHeader, MrMainContent, MrFooter, MrContainer } from "./Components";

function MorningRoutine() {
  // TOPLEVEL STATE ====================
  const steps = ["rate", "gratitude", "goal"];
  const [routineState, setRoutineState] = useState({
    step: "rate",
    inputsComplete: false,
    direction: "fwd"
  });

  function advanceState(reverse = false) {
    setRoutineState(prevState => {
      const stepIndex = steps.findIndex(step => step === prevState.step);
      return reverse
        ? { ...prevState, step: steps[stepIndex - 1], direction: "back" }
        : { ...prevState, step: steps[stepIndex + 1], direction: "fwd" };
    });
  }

  function submitRoutine() {
    // post data to server and redirect to main dash
  }

  function updateInputsComplete(complete) {
    // complete is a bool
    setRoutineState(prevState => {
      return { ...prevState, inputsComplete: complete };
    });
  }

  const buttonProps = {
    rate: { displayBackButton: false, nextButtonText: "next" },
    gratitude: { displayBackButton: true, nextButtonText: "next" },
    goal: { displayBackButton: true, nextButtonText: "finish" }
  };

  // ==============================

  // const transitionSets = {
  //   fwd: {
  //     from: { opacity: 0, transform: "translateX(150%)" },
  //     enter: { opacity: 1, transform: "translateX(0)" },
  //     leave: { opacity: 0, transform: "translateX(-150%)" }
  //   },
  //   back: {
  //     from: { opacity: 0, transform: "translateX(-150%)" },
  //     enter: { opacity: 1, transform: "translateX(0)" },
  //     leave: { opacity: 0, transform: "translateX(150%)" }
  //   }
  // };

  return (
    <MrContainer className="page">
      <MrHeader />
      <MrMainContent />
      {/* {transitions.map(({ item, props, key }) => (
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
        ))} */}

      <MrFooter
        buttonProps={{
          buttonFunc: advanceState,
          nextDisabled: !routineState.inputsComplete,
          ...buttonProps[routineState.step]
        }}
      />
    </MrContainer>
  );
}

export default MorningRoutine;
