import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MrRate, MrGratitude, MrGoal } from "./Components";

const Div = styled.div`
  position: relative;
  grid-column: 2/-2;
`;

function MrMainContent({
  step,
  dataStores,
  updateDataStore,

  direction
}) {
  const { rate, gratitude, goal } = dataStores;
  console.log("mrmainconetent datastore update", updateDataStore);
  return (
    <Div>
      {
        {
          rate: (
            <MrRate
              updateDataStore={updateDataStore}
              dataStore={rate}
              storeKey="rate"
            />
          ),
          gratitude: (
            <MrGratitude
              updateDataStore={updateDataStore}
              dataStore={gratitude}
              storeKey="gratitude"
            />
          ),
          goal: (
            <MrGoal
              updateDataStore={updateDataStore}
              dataStore={goal}
              storeKey="goal"
            />
          )
        }[step]
      }
    </Div>
  );
}

MrMainContent.propTypes = {
  updateInputsComplete: PropTypes.func.isRequired
};

export default MrMainContent;
