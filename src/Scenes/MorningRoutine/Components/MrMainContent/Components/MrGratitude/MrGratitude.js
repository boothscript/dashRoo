import React, { useEffect, useRef } from "react";
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

function MrGratitude({ style, dataKey }) {
  const inputFocusRef = useRef(null);
  // set focus on text element
  useEffect(() => {
    // hack to delay set focus untill animation has completed
    setTimeout(() => {
      inputFocusRef.current.focus();
    }, 450);
  }, []);

  return (
    <Div style={style}>
      <MrTextInput
        fwdRef={inputFocusRef}
        inputKey={1}
        placeholder={"Reason to be greatful #1"}
        dataKey={dataKey}
      />
      <MrTextInput
        inputKey={2}
        placeholder={"Reason to be greatful #2"}
        dataKey={dataKey}
      />
      <MrTextInput
        inputKey={3}
        placeholder={"Reason to be greatful #3"}
        dataKey={dataKey}
      />
    </Div>
  );
}

// MrGratitude.propTypes = {
//   dataStore: PropTypes.object.isRequired,
//   updateDataStore: PropTypes.func.isRequired,
//   storeKey: PropTypes.string.isRequired
// };

export default MrGratitude;
