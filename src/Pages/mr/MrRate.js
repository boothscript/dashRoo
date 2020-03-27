import React from "react";

import { MrHeader, MrContainer, MrRater, MrFooter } from "../../Components/mr";
import { MrMain } from "../../Components/mr/elements";
import useConfirmInputs from "../../Hooks/useConfirmInputs";

function MrRate() {
  const { inputStates, confirmInput, checkInputs } = useConfirmInputs(2);
  console.log(inputStates);
  return (
    <MrContainer>
      <MrHeader />
      <MrMain panel>
        <MrRater text="Rate Yesterday" inputId={0} confirmFn={confirmInput} />
        <MrRater text="Rate Sleep" inputId={1} confirmFn={confirmInput} />
      </MrMain>
      <MrFooter
        fieldsCompleted={checkInputs(inputStates)}
        nextPage={"/mr/gratitude"}
        buttonText={"next"}
      />
    </MrContainer>
  );
}

export default MrRate;
