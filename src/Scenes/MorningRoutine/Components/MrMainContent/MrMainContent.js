import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MrRate, MrGratitude, MrGoal } from "./Components";

const Div = styled.div`
  position: relative;
  grid-column: 2/-2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function MrMainContent({
  step,
  dataStores,
  updateDataStore,

  direction
}) {
  const { rate, gratitude, goal } = dataStores;
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
