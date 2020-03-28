import React, { useState } from "react";

const MrContext = React.createContext();

function MrContextProvider(props) {
  const [ratings, setRatings] = useState({
    day: null,
    sleep: null
  });
  const [gratitude, setGratitude] = useState({
    0: null,
    1: null,
    2: null
  });
  const [goal, setGoal] = useState({ goal: null });

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

  function submitData() {
    console.log(ratings, gratitude, goal);
  }

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
        submitData
      }}
    >
      {props.children}
    </MrContext.Provider>
  );
}

export { MrContextProvider, MrContext };
