import React, { useContext } from 'react';
import styled from 'styled-components';

import { TimerStackContext } from '../../../lib/Context/timerStackContext';

const StackWrapper = styled.div`
  grid-column: -4 / span 3;
  grid-row: 7 / span 4;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2em;
`;

const Line = styled.div`
  height: 3px;
  padding: 1px 0;
  background-color: ${(props) => props.strokeColor};
  opacity: ${(props) => props.strokeOpacity};
  width: 289.35px;
`;

//  create stack array

// fill array with objects in state.data

// fill stack with todays data

function Stack() {
  const { state } = useContext(TimerStackContext);

  //  create stack array
  const stackArr = new Array(16).fill(null);
  // fill array with objects in state.data
  try {
    state.data.sessionArr.forEach((session, index) => {
      stackArr[index] = session;
    });
  } catch {}

  console.log('stack array', stackArr);

  return (
    <>
      <StackWrapper>
        {stackArr.map((session, indx) => {
          let strokeColor;
          let strokeOpacity;
          try {
            strokeColor = session.color;
            strokeOpacity = '1';
          } catch {
            strokeColor = 'white';
            strokeOpacity = '0.15';
          }

          return (
            <Line
              key={indx}
              strokeColor={strokeColor}
              strokeOpacity={strokeOpacity}
            />
          );
        })}
      </StackWrapper>
    </>
  );
}

export default Stack;
