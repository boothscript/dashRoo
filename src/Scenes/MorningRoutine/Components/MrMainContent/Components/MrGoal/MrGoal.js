import React, { useEffect } from "react";
import styled from "styled-components";
import { MrTextInput } from "../Components";

const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function MrGoal({ style, dataStore, updateDataStore, storeKey }) {
  // set focus on text element
  useEffect(() => {
    // hack to delay set focus untill animation has completed
    setTimeout(() => {
      document.querySelector("input").focus();
    }, 350);
  }, []);

  return (
    <Div style={style}>
      <MrTextInput
        inputKey="text"
        value={dataStore.text}
        placeholder="What's your main goal for today?"
        update={updateDataStore}
        storeKey={storeKey}
      />
    </Div>
  );
}

export default MrGoal;
