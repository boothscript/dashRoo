import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useInterval } from "../../../Hooks/useInterval";

import PanelGrid from "./PanelGrid";

// STYLED COMPONENTS ==================================================

const TimeText = styled.input`
  color: ${(props) => props.theme.white90};
  background: ${(props) => props.theme.panel};
`;
const PlayButton = styled.button`
  background: blue;
`;
const PauseButton = styled.button`
  background: red;
`;
const ProjectSelect = styled.select``;

// =====================================================================

function Timer() {
  // TIMER STATE =========================================================

  const durations = { session: 4, break: 2, longBreak: 3 }; // time in seconds

  const [mode, setMode] = useState("session");
  const [isActive, setIsActive] = useState(false);
  const [projectSelected, setProjectSelected] = useState("null");
  const [timerValue, setTimerValue] = useState(4);
  const [sessionCount, setSessionCount] = useState(0);

  // =====================================================================

  // TIMER FUNCTIONS =====================================================

  useInterval(
    () => setTimerValue((prevState) => prevState - 1),
    isActive ? 1000 : null
  );

  useEffect(() => {
    console.log("inuseeffect");
    if (timerValue <= 0 && mode === "session") {
      if (sessionCount === 4) {
        setSessionCount(0);
        setMode("longBreak");
        setTimerValue(durations["longBreak"]);
        // save session in memory for stack
      } else {
        setSessionCount((count) => count + 1);
        setMode("break");
        setTimerValue(durations["break"]);
      }
    } else if (
      (timerValue <= 0 && mode === "break") ||
      (timerValue <= 0 && mode === "longBreak")
    ) {
      setMode("session");
      setTimerValue(durations["session"]);
    }
  }, [durations, timerValue, mode, sessionCount]);

  // =====================================================================
  return (
    <PanelGrid row="2 / span 4" column="-4  /span 3" bgColor="pannel">
      <TimeText value={timerValue} readOnly />
      <PlayButton onClick={() => setIsActive((prevState) => !prevState)}>
        play/pause
      </PlayButton>
      <ProjectSelect>
        <option value="Project1">Project 1</option>
        <option value="Project2">Project 2</option>
      </ProjectSelect>
    </PanelGrid>
  );
}

export default Timer;
