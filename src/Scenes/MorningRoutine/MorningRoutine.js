import React, { useState, useEffect, useLayoutEffect } from "react";

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

  // ==============================

  // DATA STORE STATE =============

  const [ratings, setRatings] = useState({ day: null, sleep: null });
  const [gratitude, setGratitude] = useState({ 1: null, 2: null, 3: null });
  const [goal, setGoal] = useState({ text: null });

  const dataStoreHash = {
    rate: [ratings, setRatings],
    gratitude: [gratitude, setGratitude],
    goal: [goal, setGoal]
  };

  function updateDataStore(storeKey, inputKey, value) {
    const [_, setMethod] = dataStoreHash[storeKey];
    setMethod(prevState => {
      return { ...prevState, [inputKey]: value };
    });
  }
  console.log("hoc ratings", ratings);
  const dataStores = {
    rate: ratings,
    gratitude: gratitude,
    goal: goal
  };

  // check steps datastore for input completion
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

  // ==============================

  const buttonProps = {
    rate: { displayBackButton: false, nextButtonText: "next" },
    gratitude: { displayBackButton: true, nextButtonText: "next" },
    goal: { displayBackButton: true, nextButtonText: "finish" }
  };
  console.log("rendering container", routineState);
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
      />
    </MrContainer>
  );
}

export default MorningRoutine;
