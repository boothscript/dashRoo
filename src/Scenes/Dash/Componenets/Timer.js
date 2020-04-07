import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useInterval } from "../../../Hooks/useInterval";

import ProgressCircle from "./ProgressCircle";
import Dropdown from "./Dropdown";
import PpButton from "./PpButton";
// STYLED COMPONENTS ==================================================

const Div = styled.div`
  grid-column: -4 / span 3;
  grid-row: 2 / span 4;
  position: relative;
`;

const TimeText = styled.input`
  width: 50%;
  color: ${(props) => props.theme.white90};
  background: ${(props) => props.theme.panel};
  border: none;
  font-family: ${(props) => props.theme.font};
  font-size: 3em;
  text-align: center;
`;

// =====================================================================

function Timer() {
  // TIMER STATE =========================================================

  const durations = { session: 4, break: 2, longBreak: 3 }; // time in seconds
  const projectArr = [
    { title: "project 1", id: 1, color: "#B3F8F1" },
    { title: "project 2", id: 2, color: "#EBEE89" },
    { title: "project 3", id: 3, color: "#EE9FD3" },
  ];
  const [mode, setMode] = useState("session");
  const [isActive, setIsActive] = useState(false);
  const [projectSelected, setProjectSelected] = useState({
    title: "project 1",
    id: 1,
    color: "#B3F8F1",
  });
  const [timerValue, setTimerValue] = useState(4);
  const [startValue, setStartValue] = useState(4);
  const [sessionCount, setSessionCount] = useState(0);

  // =====================================================================

  // TIMER FUNCTIONS =====================================================

  useInterval(
    () => setTimerValue((prevState) => prevState - 1),
    isActive ? 1000 : null
  );

  function handleTimerChange(newTime) {
    setTimerValue(newTime);
    setStartValue(newTime);
  }

  function updateProjectSelected(projectId) {
    setProjectSelected(projectArr.find((project) => project.id === projectId));
  }

  function handleClick() {
    setIsActive((prevState) => !prevState);
  }

  useEffect(() => {
    console.log("inuseeffect");
    if (timerValue <= 0 && mode === "session") {
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
      (timerValue <= 0 && mode === "break") ||
      (timerValue <= 0 && mode === "longBreak")
    ) {
      setMode("session");
      handleTimerChange(durations["session"]);
    }
  }, [durations, timerValue, mode, sessionCount]);

  // =====================================================================
  return (
    <Div>
      <ProgressCircle
        startValue={startValue}
        currentTime={timerValue}
        color={projectSelected.color}
      >
        <PpButton
          click={handleClick}
          isActive={isActive}
          color={projectSelected.color}
        />
        <TimeText value={timerValue} readOnly />
        <Dropdown
          projectArr={projectArr}
          currentProject={projectSelected}
          updateProjectSelected={updateProjectSelected}
        />
      </ProgressCircle>
    </Div>
  );
}

export default Timer;
