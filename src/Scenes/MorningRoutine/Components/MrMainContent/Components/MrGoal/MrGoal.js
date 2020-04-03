import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MrTextInput from "../Components/MrTextInput";

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
    }, 750);
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

MrGoal.propTypes = {
  dataStore: PropTypes.object.isRequired,
  updateDataStore: PropTypes.func.isRequired,
  storeKey: PropTypes.string.isRequired
};

export default MrGoal;
