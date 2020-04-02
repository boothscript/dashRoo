import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  function submitRoutine() {
    // post data to server and redirect to main dash
    // ** for demo purposes redirects to done message **
    console.log("submit data");
    history.push("/done");
  }

  // DATA STORE STATES =============
  // stores input data

  const [ratings, setRatings] = useState({ day: null, sleep: null });
  const [gratitude, setGratitude] = useState({ 1: "", 2: "", 3: "" });
  const [goal, setGoal] = useState({ text: "" });

  const dataStores = {
    rate: ratings,
    gratitude: gratitude,
    goal: goal
  };

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

  // ==============================

  // Check storeStates to update routineState when all inputs completed
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

  // Footer buttons configs
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
        direction={routineState.direction}
      />
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
