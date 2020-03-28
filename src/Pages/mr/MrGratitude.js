import React, { useContext } from "react";

import {
  MrContainer,
  MrHeader,
  MrTextInput,
  MrFooter,
  MrMain
} from "../../Components/mr";

import { MrContext } from "../../Context/MorningRoutine";

function MrGratitude() {
  const { gratitude, checkInputs, updateGratitude } = useContext(MrContext);

  return (
    <MrContainer>
      <MrHeader />
      <MrMain>
        <MrTextInput
          inputKey={0}
          value={gratitude[0]}
          placeholder={"Reason to be greatful #1"}
          update={updateGratitude}
        />
        <MrTextInput
          inputKey={1}
          value={gratitude[1]}
          placeholder={"Reason to be greatful #2"}
          update={updateGratitude}
        />
        <MrTextInput
          inputKey={2}
          value={gratitude[2]}
          placeholder={"Reason to be greatful #3"}
          update={updateGratitude}
        />
      </MrMain>
      <MrFooter
        fieldsCompleted={checkInputs(gratitude)}
        nextPage={"/mr/goal"}
        buttonText={"next"}
      />
    </MrContainer>
  );
}

export default MrGratitude;
