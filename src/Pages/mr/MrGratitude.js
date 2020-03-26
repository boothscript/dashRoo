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
      <MrTextAreaPanel
        inputId={0}
        confirmFn={confirmInput}
        placeholder={"Reason to be greatful #1"}
      />
      <MrTextAreaPanel
        inputId={1}
        confirmFn={confirmInput}
        placeholder={"Reason to be greatful #2"}
      />
      <MrTextAreaPanel
        inputId={2}
        confirmFn={confirmInput}
        placeholder={"Reason to be greatful #3"}
      />
    </MrWrapper>
  );
}

export default MrGratitude;
