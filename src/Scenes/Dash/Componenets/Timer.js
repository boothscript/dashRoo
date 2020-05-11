import React, { useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';

import { TimerStackContext } from '../../../lib/Context/timerStackContext';
import { durations } from '../../../lib/Reducers/timerStackReducer';
import {
  toggleTimer,
  updateTime,
  updateProject,
  updateMode,
  addSession,
  updateCount,
  editTimer,
  validateEdit,
  updateEdit,
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
  height: 40%;
  width: 100%;
  position: relative;
`;

const ModeWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  height: 80%;
  width: 100%;
  padding-top: 5px;
`;

const TimeText = styled.input`
  width: 35%;
  color: ${(props) => props.theme.white90};
  background: ${(props) => props.theme.panel};
  border: none;
  font-family: ${(props) => props.theme.font};
  font-size: 2em;
  text-align: center;
  outline: none;
  align-self: center;
`;

const Break = styled.p`
  font-family: ${(props) => props.theme.font};
  color: rgba(174, 174, 174, 0.7);
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1.16;
  width: 100%;
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

// https://codesandbox.io/s/adoring-meninsky-o3pfl

function Timer() {
  console.log('%%%%%%%%%%');
  const { state, dispatch } = useContext(TimerStackContext);
  console.log('timer state at render: ', state.timerValue);
  console.log('timer start at render: ', state.startValue);

  // Audio
  const audioRef = useRef(null);
  useEffect(() => {
    console.log('useEffect audio');
    const sessionAudio = new Audio(
      '/audio/413749__inspectorj__ui-confirmation-alert-d1.mp3'
    );
    const breakAudio = new Audio(
      '/audio/403009__inspectorj__ui-confirmation-alert-b3.mp3'
    );
    audioRef.current = { sessionAudio, breakAudio };
  }, []);
  // TIMER FUNCTIONS =====================================================
  const workerRef = useRef();
  // creates worker timer

  function tick() {
    console.log('ticking');
    console.log(state.timerValue);
    dispatch(updateTime(-500));
  }

  // starts and terminates worker
  useEffect(() => {
    console.log('useEffect worker');
    async function createWorker() {
      console.log('starting worker');
      const worker = await new Worker('/workers/timerWorker.js');
      worker.onmessage = (e) => {
        console.log('hello');
        console.log('worker says', e.data);
        // const tick = state.isTicking ? 500 : null;
        tick();
        // console.log({ tick });
      };
      worker.postMessage('vroom vroom');
      workerRef.current = worker;
      return worker;
    }

    const worker = createWorker();

    return () => {
      workerRef.current.terminate();
    };
  }, []);

  function updateProjectSelected(value) {
    dispatch(
      updateProject(projectArr.find((project) => project.title === value))
    );
  }

  // handles when clock reaches 0
  useEffect(() => {
    console.log('useEffect, 0');
    if (state.timerValue <= 0 && state.mode === 'session' && state.isTicking) {
      dispatch(addSession({ ...state.projectSelected, time: new Date() }));
      audioRef.current.breakAudio.play();
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
      audioRef.current.sessionAudio.play();
      dispatch(updateMode('session', durations.session));
    }
  }, [
    state.timerValue,
    state.mode,
    state.isTicking,
    state.sessionCount,
    state.projectSelected,
    dispatch,
  ]);

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
    <>
      <ModeWrapper>
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
      </ModeWrapper>
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
              value={
                state.isInEdit
                  ? state.editTimerValue
                  : convertToDisplayTime(state.timerValue)
              }
              readOnly={state.isTicking}
              onChange={(e) => {
                if (state.isInEdit) {
                  dispatch(updateEdit(e.target.value));
                }
                dispatch(updateTime(displayTimeToMs(e.target.value)));
              }}
              onFocus={(e) => dispatch(editTimer(state, e.targetValue))}
              onBlur={(e) =>
                dispatch(validateEdit(state, displayTimeToMs(e.target.value)))
              }
            />
          </ControlsWrapper>
        </ProgressCircle>
      </Div>
    </>
  );
}

export default Timer;
