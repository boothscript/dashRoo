import React, { useContext } from "react";

import { MrMain } from "../Components";
import MrRater from "./Components/MrRater/MrRater";

import { MrContext } from "../../Context/MorningRoutine";

function MrRate() {
  const { ratings, updateRatings } = useContext(MrContext);
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
