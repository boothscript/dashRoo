import React, { useContext } from "react";

import {
  MrContainer,
  MrHeader,
  MrFooter,
  MrTextInput,
  MrMain
} from "../../Components/mr";
import { MrContext } from "../../Context/MorningRoutine";

function MrGoal() {
  const { goal, checkInputs, updateGoal, submitMrData } = useContext(MrContext);
  return (
    <MrContainer>
      <MrHeader />
      <MrMain>
        <MrTextInput
          inputKey="text"
          value={goal.text}
          placeholder="What's your main goal for today?"
          update={updateGoal}
        />
      </MrMain>
      <MrFooter
        fieldsCompleted={checkInputs(goal)}
        nextPage={"/dash"}
        buttonText={"finish"}
        submitFunc={submitMrData}
      />
    </MrContainer>
  );
}

export default MrGoal;
