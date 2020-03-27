import React from "react";

import { MrHeader, MrContainer, MrRater, MrFooter } from "../../Components/mr";
import { MrMain } from "../../Components/mr/elements";
import useConfirmInputs from "../../Hooks/useConfirmInputs";

function MrRate() {
  const { inputStates, confirmInput, checkInputs } = useConfirmInputs(2);

  return (
    <MrContainer>
      <MrHeader />
      <MrMain main>
        <MrRater text="Rate Yesterday" input={0} confirmFn={confirmInput} />
        <MrRater text="Rate Sleep" input={1} confirmFn={confirmInput} />
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
