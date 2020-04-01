import React, { useEffect } from "react";

import { MrTextInput } from "../Components";

function MrGratitude({ dataStore, updateDataStore, storeKey }) {
  // set focus on text element
  useEffect(() => {
    // hack to delay set focus untill animation has completed
    setTimeout(() => {
      document.querySelector("input").focus();
    }, 350);
  }, []);

  console.log("update", updateDataStore);
  return (
    <>
      <MrTextInput
        inputKey={1}
        value={dataStore[1]}
        placeholder={"Reason to be greatful #1"}
        update={updateDataStore}
        storeKey={storeKey}
      />
      <MrTextInput
        inputKey={2}
        value={dataStore[2]}
        placeholder={"Reason to be greatful #2"}
        update={updateDataStore}
        storeKey={storeKey}
      />
      <MrTextInput
        inputKey={3}
        value={dataStore[3]}
        placeholder={"Reason to be greatful #3"}
        update={updateDataStore}
        storeKey={storeKey}
      />
    </>
  );
}

export default MrGratitude;
