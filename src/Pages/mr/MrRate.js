import React, { useContext } from "react";

import {
  MrMain,
  MrHeader,
  MrContainer,
  MrRater,
  MrFooter
} from "../../Components/mr";

import { MrContext } from "../../Context/MorningRoutine";

function MrRate() {
  const { ratings, checkInputs, updateRatings } = useContext(MrContext);
  return (
    <MrContainer>
      <MrHeader />
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
      <MrFooter
        fieldsCompleted={checkInputs(ratings)}
        nextPage={"/mr/gratitude"}
        buttonText={"next"}
      />
    </MrContainer>
  );
}

export default MrRate;
