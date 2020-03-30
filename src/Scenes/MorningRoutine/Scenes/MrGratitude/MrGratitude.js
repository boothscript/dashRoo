import React, { useContext, useEffect } from "react";

import { MrTextInput, MrMain } from "../Components";

import { MrContext } from "../../Context/MorningRoutine";

function MrGratitude() {
  const { gratitude, updateGratitude } = useContext(MrContext);
  // set focus on text element
  useEffect(() => {
    // hack to delay set focus untill animation has completed
    setTimeout(() => {
      document.querySelector("input").focus();
    }, 350);
  }, []);
  return (
    <>
      <MrTextInput
        inputKey={0}
        value={gratitude[0]}
        placeholder={"Reason to be greatful #1"}
        update={updateGratitude}
      />
      <MrTextInput
        inputKey={1}
        value={gratitude[1]}
        placeholder={"Reason to be greatful #2"}
        update={updateGratitude}
      />
      <MrTextInput
        inputKey={2}
        value={gratitude[2]}
        placeholder={"Reason to be greatful #3"}
        update={updateGratitude}
      />
    </>
  );
}

export default MrGratitude;
