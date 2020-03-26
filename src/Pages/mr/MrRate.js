import React, { useState } from "react";

import { MrWrapper, MrRatePanel } from "../../Components/mr";

function MrRate() {
  const [inputStates, setInputStates] = useState({ 0: false, 1: false });

  function confirmInput({ inputId }) {
    setInputStates(prevState => ({ ...prevState, [inputId]: true }));
  }
  console.log(inputStates);
  return (
    <MrWrapper
      fieldsCompleted={Object.values(inputStates).every(i => i)}
      nextPage={"MrGratitude"}
    >
      <MrRatePanel
        inputId={0}
        confirmFn={confirmInput}
        text={"Rate Yesterday"}
      />
      <MrRatePanel inputId={1} confirmFn={confirmInput} text={"Rate Sleep"} />
    </MrWrapper>
  );
}

export default MrRate;
