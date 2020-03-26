import React from "react";

import { MrWrapper, MrRatePanel } from "../../Components/mr";
import useConfirmInputs from "../../Hooks/useConfirmInputs";

function MrRate() {
  const { inputStates, confirmInput, checkInputs } = useConfirmInputs(2);

  return (
    <MrWrapper
      fieldsCompleted={checkInputs(inputStates)}
      nextPage={"/mr/gratitude"}
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
