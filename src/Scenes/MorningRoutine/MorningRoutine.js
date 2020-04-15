import React, {
  useState,
  useLayoutEffect,
  useContext,
  useReducer,
} from "react";
import { useHistory } from "react-router-dom";

import { MorningRoutineContext } from "../../lib/Context/MorningRoutineContext";
import {
  reducer,
  initialState,
} from "../../lib/Reducers/MorningRoutineReducer";

import { MrHeader, MrMainContent, MrFooter, MrContainer } from "./Components";
import {
  SUBMIT_RATE,
  SUBMIT_GRATITUDE,
  SUBMIT_GOAL,
} from "../../lib/Actions/MorningRoutineTypes";

function MorningRoutine() {
  const { state } = useContext(MorningRoutineContext);

  // ==============================

  // Footer buttons configs
  const buttonProp = {
    rate: {
      displayBackButton: false,
      nextButtonText: "next",
      isEnabled: state.data.ratings.day && state.data.ratings.sleep,
      fwdButtonAction: SUBMIT_RATE,
    },
    gratitude: {
      displayBackButton: true,
      nextButtonText: "next",
      isEnabled:
        state.data.gratitude[1] &&
        state.data.gratitude[2] &&
        state.data.gratitude[3],
      fwdButtonAction: SUBMIT_GRATITUDE,
    },
    goal: {
      displayBackButton: true,
      nextButtonText: "finish",
      isEnabled: state.data.goal.text,
      fwdButtonAction: SUBMIT_GOAL,
    },
  };
  console.log("1", buttonProp);
  console.log("2", buttonProp["rate"]);
  console.log("3", state);
  return (
    <MrContainer className="page">
      <MrHeader />
      <MrMainContent direction={state.direction} />
      <MrFooter buttonProp={buttonProp[state.step]} />
    </MrContainer>
  );
}

export default MorningRoutine;
