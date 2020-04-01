import React, { useState, useLayoutEffect } from "react";

import { MrHeader, MrMainContent, MrFooter, MrContainer } from "./Components";

function MorningRoutine() {
  // TOPLEVEL STATE ====================
  // Stores step form state

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
    console.log("submit data");
  }

  // ==============================

  // DATA STORE STATE =============
  // stores input data

  const [ratings, setRatings] = useState({ day: null, sleep: null });
  const [gratitude, setGratitude] = useState({ 1: null, 2: null, 3: null });
  const [goal, setGoal] = useState({ text: null });

  const setMethods = {
    rate: setRatings,
    gratitude: setGratitude,
    goal: setGoal
  };

  function updateDataStore(storeKey, inputKey, value) {
    const setMethod = setMethods[storeKey];
    setMethod(prevState => {
      return { ...prevState, [inputKey]: value };
    });
  }
  const dataStores = {
    rate: ratings,
    gratitude: gratitude,
    goal: goal
  };

  // ==============================

  // Update Step state when necessary
  useLayoutEffect(() => {
    const dataStores = {
      rate: ratings,
      gratitude: gratitude,
      goal: goal
    };
    setRoutineState(prevState => {
      return {
        ...prevState,
        inputsComplete: Object.values(dataStores[prevState.step]).every(i => i)
      };
    });
  }, [ratings, gratitude, goal, routineState.step]);

  const buttonProps = {
    rate: { displayBackButton: false, nextButtonText: "next" },
    gratitude: { displayBackButton: true, nextButtonText: "next" },
    goal: { displayBackButton: true, nextButtonText: "finish" }
  };
  return (
    <MrContainer className="page">
      <MrHeader step={routineState.step} />
      <MrMainContent
        step={routineState.step}
        dataStores={dataStores}
        updateDataStore={updateDataStore}
        direction={null}
      />
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
        buttonFunc={advanceState}
        nextDisabled={!routineState.inputsComplete}
        buttonProps={buttonProps[routineState.step]}
        submitRoutine={routineState.step === "goal" ? submitRoutine : null}
      />
    </MrContainer>
  );
}

export default MorningRoutine;
