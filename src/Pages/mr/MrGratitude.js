import React from "react";

import {
  MrContainer,
  MrHeader,
  MrTextArea,
  MrFooter
} from "../../Components/mr";
import { MrMain } from "../../Components/mr/elements";
import useConfirmInputs from "../../Hooks/useConfirmInputs";

function MrGratitude() {
  const { inputStates, confirmInput, checkInputs } = useConfirmInputs(3);
  return (
    <MrContainer>
      <MrHeader />
      <MrMain>
        <MrTextArea
          inputId={0}
          confirmFn={confirmInput}
          placeholder={"Reason to be greatful #1"}
        />
        <MrTextArea
          inputId={1}
          confirmFn={confirmInput}
          placeholder={"Reason to be greatful #2"}
        />
        <MrTextArea
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
