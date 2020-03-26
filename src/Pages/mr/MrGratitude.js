import React from "react";

import { MrWrapper, MrTextAreaPanel } from "../../Components/mr";
import useConfirmInputs from "../../Hooks/useConfirmInputs";

function MrGratitude() {
  const { inputStates, confirmInput, checkInputs } = useConfirmInputs(3);
  return (
    <MrWrapper
      fieldsCompleted={checkInputs(inputStates)}
      nextPage="/mr/goal"
      buttonText={"next"}
    >
      <MrTextAreaPanel inputId={0} confirmFn={confirmInput} />
      <MrTextAreaPanel inputId={1} confirmFn={confirmInput} />
      <MrTextAreaPanel inputId={2} confirmFn={confirmInput} />
    </MrWrapper>
  );
}

export default MrGratitude;
