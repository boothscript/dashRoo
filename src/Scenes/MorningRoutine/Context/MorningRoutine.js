import React, { useState } from "react";

const MrContext = React.createContext();

function MrContextProvider(props) {
  // states are noEntry, rate, gratitude, goal, complete
  //  check storage and determin state
  const [mrState, setMrState] = useState("rate");

  function advanceState(backwards = false) {
    const states = ["noEntry", "rate", "gratitude", "goal", "complete"];

    // get index of current state
    // move state forward or backwards by one
    // update to new state
    setMrState(prevState => {
      const stateIndex = states.findIndex(state => state === prevState);
      console.log(
        "advancing state, prev state was",
        stateIndex,
        "backawrdds is ",
        backwards
      );

      return backwards ? states[stateIndex - 1] : states[stateIndex + 1];
    });
  }

  const [ratings, setRatings] = useState({
    day: null,
    sleep: null
  });
  const [gratitude, setGratitude] = useState({
    0: "",
    1: "",
    2: ""
  });
  const [goal, setGoal] = useState({ text: "" });

  function updateRatings(key, value) {
    setRatings(prevState => ({ ...prevState, [key]: value }));
  }
  function updateGratitude(key, value) {
    setGratitude(prevState => ({ ...prevState, [key]: value }));
  }
  function updateGoal(key, value) {
    setGoal(prevState => ({ ...prevState, [key]: value }));
  }

  function checkInputs(inputStates) {
    console.log(inputStates);
    return Object.values(inputStates).every(i => i);
  }

  function submitMrData() {
    console.log(ratings, gratitude, goal);
  }
  console.log("THE STATE IS", mrState);
  return (
    <MrContext.Provider
      value={{
        ratings,
        gratitude,
        goal,
        updateRatings,
        updateGratitude,
        updateGoal,
        checkInputs,
        submitMrData,
        mrState,
        advanceState
      }}
    >
      {props.children}
    </MrContext.Provider>
  );
}

export { MrContextProvider, MrContext };