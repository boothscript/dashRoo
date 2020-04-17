import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import { useInterval } from "../../../Hooks/useInterval";
import { TimerStackContext } from "../../../lib/Context/timerStackContext";
import { durations } from "../../../lib/Reducers/timerStackReducer";
import {
  toggleTimer,
  updateTime,
  updateProject,
  updateMode,
  addSession,
  updateCount,
} from "../../../lib/Actions/timerStackActions";
import {
  convertToDisplayTime,
  displayTimeToMs,
} from "../../../Helpers/timeConversions";

import ProgressCircle from "./ProgressCircle";
import Dropdown from "./Dropdown";
import PpButton from "./PpButton";
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

// put this somewhere else
const projectArr = [
  { title: "project rooter", id: 1, color: "#B3F8F1" },
  { title: "job search", id: 2, color: "#EBEE89" },
  { title: "project dashroo", id: 3, color: "#EE9FD3" },
];

function Timer() {
  const { state, dispatch } = useContext(TimerStackContext);

  // TIMER FUNCTIONS =====================================================

  useInterval(
    () => {
      console.log(state.timerValue);
      dispatch(updateTime(state, state.timerValue - 500));
    },
    state.isTicking ? 500 : null
  );

  function handleManChange(e) {
    dispatch(updateTime(displayTimeToMs(e.target.value)));
  }

  function updateProjectSelected(projectId) {
    dispatch(
      updateProject(projectArr.find((project) => project.id === projectId))
    );
  }

  function handleClick() {
    dispatch(toggleTimer());
  }

  // handles when clock reaches 0
  useEffect(() => {
    if (state.timerValue <= 0 && state.mode === "session" && state.isTicking) {
      console.log("session eneded", {
        ...state.projectSelected,
        time: new Date(),
      });
      dispatch(addSession({ ...state.projectSelected, time: new Date() }));
      if (state.sessionCount === 3) {
        dispatch(updateCount(0));
        dispatch(updateMode("longBreak", durations["longBreak"]));
      } else {
        console.log("break mode");
        dispatch(updateCount(state.sessionCount + 1));
        dispatch(updateMode("break", durations["break"]));
      }
    } else if (
      (state.timerValue <= 0 && state.mode === "break" && state.isTicking) ||
      (state.timerValue <= 0 && state.mode === "longBreak" && state.isTicking)
    ) {
      console.log("back to session");
      dispatch(updateMode("session", durations["session"]));
    }
    console.log(state);
  }, [state, dispatch]);

  const timerColor =
    state.mode === "session"
      ? state.projectSelected.color
      : "rgba(174, 174, 174, 0.7)";

  // =====================================================================
  console.log("toggle timer type is ", typeof toggleTimer);
  return (
    <Div>
      <ProgressCircle
        startValue={state.startValue}
        currentTime={state.timerValue}
        color={timerColor}
      >
        <ControlsWrapper>
          <PpButton
            click={handleClick}
            isActive={state.isTicking}
            color={timerColor}
          />
          <TimeText
            value={convertToDisplayTime(state.timerValue)}
            readOnly={state.isTicking}
            onChange={handleManChange}
          />
          {state.mode !== "session" ? (
            <Break>{state.mode}</Break>
          ) : (
            <Dropdown
              projectArr={projectArr}
              currentProject={state.projectSelected}
              updateProjectSelected={updateProjectSelected}
            />
          )}
        </ControlsWrapper>
      </ProgressCircle>
    </Div>
  );
}

export default Timer;
