import React, { useContext } from 'react';
import styled from 'styled-components';
import crypto from 'crypto';

import { TimerStackContext } from '../../../lib/Context/timerStackContext';

const StackWrapper = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  height: 1px;
  padding: 1px 0;
  background-color: ${(props) => props.strokeColor};
  opacity: ${(props) => props.strokeOpacity};
  width: 65%;
`;

function Stack() {
  const { state } = useContext(TimerStackContext);

  //  create stack array
  const stackArr = new Array(16).fill(null);
  // fill array with objects in state.data
  try {
    state.data.sessionArr.forEach((session, index) => {
      stackArr[index] = session;
    });
  } catch (error) {
    throw new Error(error);
  }

  return (
    <>
      <StackWrapper>
        {stackArr.map((session) => {
          const randomKey = crypto.randomBytes(4).toString('hex');
          let strokeColor;
          let strokeOpacity;
          try {
            strokeColor = session.color;
            strokeOpacity = '1';
          } catch (error) {
            strokeColor = 'white';
            strokeOpacity = '0.15';
          }

          return (
            <Line
              key={randomKey}
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
