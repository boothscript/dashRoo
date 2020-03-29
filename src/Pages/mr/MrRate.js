import React, { useContext } from "react";
import styled from "styled-components";

import { MrMain, MrRater } from "../../Components/mr";

import { MrContext } from "../../Context/MorningRoutine";

function MrRate() {
  const { ratings, checkInputs, updateRatings } = useContext(MrContext);
  return (
    <MrMain panel>
      <MrRater
        text="Rate Yesterday"
        inputKey={"day"}
        dataStore={ratings}
        updateMethod={updateRatings}
      />
      <MrRater
        text="Rate Sleep"
        inputKey={"sleep"}
        dataStore={ratings}
        updateMethod={updateRatings}
      />
    </MrMain>
  );
}

export default MrRate;
