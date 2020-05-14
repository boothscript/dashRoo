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
  const { state, dispatch } = useContext(TimerStackContext);

  // notifications
  function notify(text) {
    new window.Notification(text);
  }

  // Audio
  const audioRef = useRef(null);
  useEffect(() => {
    const sessionAudio = new Audio(
      '/audio/413749__inspectorj__ui-confirmation-alert-d1.mp3'
    );
    const breakAudio = new Audio(
      '/audio/403009__inspectorj__ui-confirmation-alert-b3.mp3'
    );
    audioRef.current = { sessionAudio, breakAudio };
  }, []);

  // Worker
  const workerRef = useRef();

  // creates and terminates worker
  useEffect(() => {
    async function createWorker() {
      const worker = await new Worker('/workers/timerWorker.js');
      worker.onmessage = () => {
        dispatch(updateTime(-500));
      };
      worker.postMessage('vroom vroom');
      workerRef.current = worker;
      return worker;
    }

    createWorker();

    return () => {
      workerRef.current.terminate();
    };
  }, [dispatch]);

  function updateProjectSelected(value) {
    dispatch(
      updateProject(projectArr.find((project) => project.title === value))
    );
  }

  // handles when clock reaches 0
  useEffect(() => {
    if (state.timerValue <= 0 && state.mode === 'session' && state.isTicking) {
      dispatch(addSession({ ...state.projectSelected, time: new Date() }));
      audioRef.current.breakAudio.play();
      if (state.sessionCount === 3) {
        dispatch(updateCount(0));
        dispatch(updateMode('longBreak', durations.longBreak));
        notify('Long Break Starting');
      } else {
        dispatch(updateCount(state.sessionCount + 1));
        dispatch(updateMode('break', durations.break));
        notify('Take a second to chill');
      }
    } else if (
      (state.timerValue <= 0 && state.mode === 'break' && state.isTicking) ||
      (state.timerValue <= 0 && state.mode === 'longBreak' && state.isTicking)
    ) {
      audioRef.current.sessionAudio.play();
      dispatch(updateMode('session', durations.session));
      notify('Get back to work!!!');
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
