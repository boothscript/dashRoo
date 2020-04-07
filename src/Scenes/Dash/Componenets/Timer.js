import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useInterval } from "../../../Hooks/useInterval";

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

function Timer() {
  // TIMER STATE =========================================================

  const durations = { session: 5000, break: 5000, longBreak: 3000 }; // time in seconds
  const projectArr = [
    { title: "project rooter", id: 1, color: "#B3F8F1" },
    { title: "job search", id: 2, color: "#EBEE89" },
    { title: "project dashroo", id: 3, color: "#EE9FD3" },
  ];
  const [mode, setMode] = useState("session");
  const [isActive, setIsActive] = useState(false);
  const [projectSelected, setProjectSelected] = useState({
    title: "project rooter",
    id: 1,
    color: "#B3F8F1",
  });
  const [timerValue, setTimerValue] = useState(durations.session);
  const [startValue, setStartValue] = useState(durations.session);
  const [sessionCount, setSessionCount] = useState(0);

  // =====================================================================

  // TIMER FUNCTIONS =====================================================

  useInterval(
    () => setTimerValue((prevState) => prevState - 500),
    isActive ? 500 : null
  );

  function handleTimerChange(newTime) {
    setTimerValue(newTime);
    setStartValue(newTime);
  }
  function handleManChange(e) {
    handleTimerChange(displayTimeToMs(e.target.value));
  }

  function updateProjectSelected(projectId) {
    setProjectSelected(projectArr.find((project) => project.id === projectId));
  }

  function handleClick() {
    setIsActive((prevState) => !prevState);
  }

  // handles when clock reaches 0
  useEffect(() => {
    if (timerValue <= 0 && mode === "session" && isActive) {
      if (sessionCount === 4) {
        setSessionCount(0);
        setMode("longBreak");
        handleTimerChange(durations["longBreak"]);
        // save session in memory for stack
      } else {
        setSessionCount((count) => count + 1);
        setMode("break");
        handleTimerChange(durations["break"]);
      }
    } else if (
      (timerValue <= 0 && mode === "break" && isActive) ||
      (timerValue <= 0 && mode === "longBreak" && isActive)
    ) {
      setMode("session");
      handleTimerChange(durations["session"]);
    }
  }, [durations, timerValue, mode, sessionCount]);

  const timerColor =
    mode === "session" ? projectSelected.color : "rgba(174, 174, 174, 0.7)";

  // =====================================================================
  return (
    <Div>
      <ProgressCircle
        startValue={startValue}
        currentTime={timerValue}
        color={timerColor}
      >
        <ControlsWrapper>
          <PpButton
            click={handleClick}
            isActive={isActive}
            color={timerColor}
          />
          <TimeText
            value={convertToDisplayTime(timerValue)}
            readOnly={isActive}
            onChange={handleManChange}
          />
          {mode !== "session" ? (
            <Break>{mode}</Break>
          ) : (
            <Dropdown
              projectArr={projectArr}
              currentProject={projectSelected}
              updateProjectSelected={updateProjectSelected}
            />
          )}
        </ControlsWrapper>
      </ProgressCircle>
    </Div>
  );
}

export default Timer;
