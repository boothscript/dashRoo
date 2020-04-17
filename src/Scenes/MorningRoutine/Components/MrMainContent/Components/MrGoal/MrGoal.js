import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import MrTextInput from '../Components/MrTextInput';

const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function MrGoal({ style, dataKey }) {
  const inputFocusRef = useRef(null);
  // set focus on text element
  useEffect(() => {
    // hack to delay set focus untill animation has completed

    setTimeout(() => {
      inputFocusRef.current.focus();
    }, 750);
  }, []);

  return (
    <Div style={style}>
      <MrTextInput
        fwdRef={inputFocusRef}
        inputKey="text"
        placeholder="What's your main goal for today?"
        dataKey={dataKey}
      />
    </Div>
  );
}

// MrGoal.propTypes = {
//   dataStore: PropTypes.object.isRequired,
//   updateDataStore: PropTypes.func.isRequired,
//   storeKey: PropTypes.string.isRequired
// };

export default MrGoal;
