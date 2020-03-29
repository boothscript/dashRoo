import React, { useContext, useEffect } from "react";

import { MrTextInput, MrMain } from "../Components";
import { MrContext } from "../../Context/MorningRoutine";

function MrGoal() {
  // set focus on text element
  useEffect(() => {
    // hack to delay set focus untill animation has completed
    setTimeout(() => {
      document.querySelector("input").focus();
    }, 350);
  }, []);

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
