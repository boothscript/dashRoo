import React from "react";

import { MrWrapper, MrTextInputPanel } from "../../Components/mr";
import useConfirmInputs from "../../Hooks/useConfirmInputs";

function MrGoal() {
  const { inputStates, confirmInput, checkInputs } = useConfirmInputs(1);
  return (
    <MrWrapper
      fieldsCompleted={checkInputs(inputStates)}
      nextPage="/dash"
      buttonText={"finish"}
    >
      <MrTextInputPanel
        inputId={0}
        confirmFn={confirmInput}
        placeholder={"What's your main goal for today?"}
      />
    </MrWrapper>
  );
}

export default MrGoal;
