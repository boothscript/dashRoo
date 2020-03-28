import React from "react";

import {
  MrContainer,
  MrHeader,
  MrFooter,
  MrTextInput,
  MrMain
} from "../../Components/mr";

import useConfirmInputs from "../../Hooks/useConfirmInputs";

function MrGoal() {
  const { inputStates, confirmInput, checkInputs } = useConfirmInputs(1);
  return (
    <MrContainer>
      <MrHeader />
      <MrMain>
        <MrTextInput
          inputId={0}
          confirmFn={confirmInput}
          placeholder="What's your main goal for today?"
        />
      </MrMain>
      <MrFooter
        fieldsCompleted={checkInputs(inputStates)}
        nextPage={"/dash"}
        buttonText={"finish"}
      />
    </MrContainer>
  );
}

export default MrGoal;
