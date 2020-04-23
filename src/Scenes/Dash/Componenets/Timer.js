import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import useInterval from '../../../Hooks/useInterval';
import { TimerStackContext } from '../../../lib/Context/timerStackContext';
import { durations } from '../../../lib/Reducers/timerStackReducer';
import {
  toggleTimer,
  updateTime,
  updateProject,
  updateMode,
  addSession,
  updateCount,
} from '../../../lib/Actions/timerStackActions';
import {
  convertToDisplayTime,
  displayTimeToMs,
} from '../../../Utils/timeConversions';

import ProgressCircle from './ProgressCircle';
import Dropdown from './DropdownTimer';
import PpButton from './PpButton';
// STYLED COMPONENTS ==================================================

const Div = styled.div`
  grid-column: -4 / span 3;
  grid-row: 2 / span 4;
  position: relative;
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  height: 80%;
  width: 100%;
  padding-top: 40px;
`;

const TimeText = styled.input`
  width: 50%;
  color: ${(props) => props.theme.white90};
  background: ${(props) => props.theme.panel};
  border: none;
  font-family: ${(props) => props.theme.font};
  font-size: 3em;
  text-align: center;
  outline: none;
  align-self: center;
`;

const Break = styled.p`
  font-family: ${(props) => props.theme.font};
  color: rgba(174, 174, 174, 0.7);
  text-transform: uppercase;
  font-size: 1.25em;
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1.16;
  width: 220px;
  text-align: center;
  align-self: center;
`;
// =====================================================================

// Dummy project data
const projectArr = [
  { title: 'project rooter', id: 'h2g4j5', color: '#B3F8F1' },
  { title: 'job search', id: 'gsfhdj', color: '#EBEE89' },
  { title: 'project dashroo', id: 'gfdhs', color: '#EE9FD3' },
];

function Timer() {
  const { state, dispatch } = useContext(TimerStackContext);

  // TIMER FUNCTIONS =====================================================
  useInterval(
    () => {
      dispatch(updateTime(state, state.timerValue - 500));
    },
    state.isTicking ? 500 : null
  );

  function updateProjectSelected(value) {
    dispatch(
      updateProject(projectArr.find((project) => project.title === value))
    );
  }

  // handles when clock reaches 0
  useEffect(() => {
    if (state.timerValue <= 0 && state.mode === 'session' && state.isTicking) {
      dispatch(addSession({ ...state.projectSelected, time: new Date() }));
      if (state.sessionCount === 3) {
        dispatch(updateCount(0));
        dispatch(updateMode('longBreak', durations.longBreak));
      } else {
        dispatch(updateCount(state.sessionCount + 1));
        dispatch(updateMode('break', durations.break));
      }
    } else if (
      (state.timerValue <= 0 && state.mode === 'break' && state.isTicking) ||
      (state.timerValue <= 0 && state.mode === 'longBreak' && state.isTicking)
    ) {
      dispatch(updateMode('session', durations.session));
    }
  }, [state, dispatch]);

  const timerColor =
    state.mode === 'session'
      ? state.projectSelected.color
      : 'rgba(174, 174, 174, 0.7)';

  // =====================================================================

  // map colors object for dropdown
  const colorsObj = {};
  projectArr.forEach((project) => {
    colorsObj[project.title] = project.color;
  });

  return (
    <Div>
      <ProgressCircle
        startValue={state.startValue}
        currentTime={state.timerValue}
        color={timerColor}
      >
        <ControlsWrapper>
          <PpButton
            click={() => dispatch(toggleTimer())}
            isActive={state.isTicking}
            color={timerColor}
          />
          <TimeText
            value={convertToDisplayTime(state.timerValue)}
            readOnly={state.isTicking}
            onChange={(e) =>
              dispatch(updateTime(displayTimeToMs(e.target.value)))
            }
          />
          {state.mode !== 'session' ? (
            <Break>{state.mode}</Break>
          ) : (
            <Dropdown
              valueArray={projectArr.map((project) => project.title)}
              stateValue={state.projectSelected.title}
              updateValue={updateProjectSelected}
              colors={colorsObj}
            />
          )}
        </ControlsWrapper>
      </ProgressCircle>
    </Div>
  );
}

export default Timer;
