import { useState } from "react";

function useConfirmInputs(numberOfInputs) {
  // create state object
  const inputs = {};
  for (let i = 0; i < numberOfInputs; i++) {
    inputs[i] = false;
  }
  // create state
  const [inputStates, setInputStates] = useState(inputs);
  // confirm input fn
  function confirmInput({ inputId }) {
    setInputStates(prevState => ({ ...prevState, [inputId]: true }));
    console.log(inputStates);
  }
  // all inputs true check
  const checkInputs = inputStates => {
    return Object.values(inputStates).every(i => i);
  };
  return { inputStates, confirmInput, checkInputs };
}

export default useConfirmInputs;
