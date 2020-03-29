import React, { useContext } from "react";

import { MrTextInput, MrMain } from "../../Components/mr";
import { MrContext } from "../../Context/MorningRoutine";

function MrGoal() {
  const { goal, checkInputs, updateGoal, submitMrData } = useContext(MrContext);
  return (
    <MrMain>
      <MrTextInput
        inputKey="text"
        value={goal.text}
        placeholder="What's your main goal for today?"
        update={updateGoal}
      />
    </MrMain>
  );
}

export default MrGoal;
