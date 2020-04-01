import React, { useEffect } from "react";

import { MrTextInput } from "../Components";

function MrGoal({ dataStore, updateDataStore, storeKey }) {
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
        inputKey="text"
        value={dataStore.text}
        placeholder="What's your main goal for today?"
        update={updateDataStore}
        storeKey={storeKey}
      />
    </>
  );
}

export default MrGoal;
