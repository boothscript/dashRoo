import React from "react";

import MrRater from "./Components/MrRater/MrRater";

function MrRate({ dataStore, updateDataStore, storeKey }) {
  return (
    <>
      <MrRater
        text="Rate Yesterday"
        inputKey={"day"}
        dataStore={dataStore}
        updateMethod={updateDataStore}
        storeKey={storeKey}
      />
      <MrRater
        text="Rate Sleep"
        inputKey={"sleep"}
        dataStore={dataStore}
        updateMethod={updateDataStore}
        storeKey={storeKey}
      />
    </>
  );
}

export default MrRate;
