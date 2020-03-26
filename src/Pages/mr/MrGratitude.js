import React from "react";

import { MrWrapper, MrTextEntryPanel } from "../../Components/mr";
import useConfirmInputs from "../../Hooks/useConfirmInputs";

function MrGratitude() {
  const { inputStates, confirmInput, checkInputs } = useConfirmInputs(3);
  return (
    <MrWrapper fieldsCompleted={checkInputs(inputStates)} nextPage="/mr/goal">
      <MrTextEntryPanel inputId={0} confirmFn={confirmInput} />
      <MrTextEntryPanel inputId={1} confirmFn={confirmInput} />
      <MrTextEntryPanel inputId={2} confirmFn={confirmInput} />
    </MrWrapper>
  );
}

export default MrGratitude;
