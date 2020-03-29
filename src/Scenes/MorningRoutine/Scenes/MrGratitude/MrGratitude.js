import React, { useContext } from "react";

import { MrTextInput, MrMain } from "../Components";

import { MrContext } from "../../Context/MorningRoutine";

function MrGratitude() {
  const { gratitude, updateGratitude } = useContext(MrContext);

  return (
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
  );
}

export default MrGratitude;
