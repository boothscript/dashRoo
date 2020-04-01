import React from "react";
import styled from "styled-components";

import MrRater from "./Components/MrRater/MrRater";

const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function MrRate({ style, dataStore, updateDataStore, storeKey }) {
  return (
    <Div style={style}>
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
    </Div>
  );
}

export default MrRate;
