import React from "react";

import {
  MrContainer,
  MrHeader,
  MrTextInput,
  MrFooter,
  MrMain
} from "../../Components/mr";

import useConfirmInputs from "../../Hooks/useConfirmInputs";

function MrGratitude() {
  const { inputStates, confirmInput, checkInputs } = useConfirmInputs(3);
  return (
    <MrContainer>
      <MrHeader />
      <MrMain>
        <MrTextInput
          inputId={0}
          confirmFn={confirmInput}
          placeholder={"Reason to be greatful #1"}
        />
        <MrTextInput
          inputId={1}
          confirmFn={confirmInput}
          placeholder={"Reason to be greatful #2"}
        />
        <MrTextInput
          inputId={2}
          confirmFn={confirmInput}
          placeholder={"Reason to be greatful #3"}
        />
      </MrMain>
      <MrFooter
        fieldsCompleted={checkInputs(inputStates)}
        nextPage={"/mr/goal"}
        buttonText={"next"}
      />
    </MrContainer>
  );
}

export default MrGratitude;
