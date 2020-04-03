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

function MrGratitude({ style, dataStore, updateDataStore, storeKey }) {
  // set focus on text element
  useEffect(() => {
    // hack to delay set focus untill animation has completed
    setTimeout(() => {
      document.querySelector("input").focus();
    }, 450);
  }, []);

  return (
    <Div style={style}>
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
    </Div>
  );
}

MrGratitude.propTypes = {
  dataStore: PropTypes.object.isRequired,
  updateDataStore: PropTypes.func.isRequired,
  storeKey: PropTypes.string.isRequired
};

export default MrGratitude;
