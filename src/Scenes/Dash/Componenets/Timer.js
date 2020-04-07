import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useInterval } from "../../../Hooks/useInterval";

import PanelGrid from "./PanelGrid";
import ProgressCircle from "./ProgressCircle";
import Dropdown from "./Dropdown";

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
const ButtonWrapper = styled.button`
  background: inherit;
  border: none;
  &:focus,
  &:active {
    outline: none;
  }
`;
const PauseButton = styled.button`
  background: red;
`;
const ProjectSelect = styled.select``;

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
  function PpButton({ isActive, color, click }) {
    function iconPath(isActive) {
      return isActive ? (
        <>
          <path fill={color} d="M6 5h2v14H6V5zm10 0h2v14h-2V5z" />
        </>
      ) : (
        <>
          <path
            fill={color}
            d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
          />
        </>
      );
    }
    return (
      <ButtonWrapper onClick={click}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="42"
          height="42"
          stroke={color}
        >
          {iconPath(isActive)}
        </svg>
      </ButtonWrapper>
    );
  }
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
