import React, { useContext } from "react";

import { MrTextInput, MrMain } from "../Components";
import { MrContext } from "../../Context/MorningRoutine";

function MrGoal() {
  const { goal, updateGoal } = useContext(MrContext);
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
