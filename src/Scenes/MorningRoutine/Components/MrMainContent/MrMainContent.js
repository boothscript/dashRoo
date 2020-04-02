import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";

import { MrRate, MrGratitude, MrGoal } from "./Components";

const Div = styled.div`
  grid-column: 2/-2;
  position: relative;
  height: 100%;
`;

const MrRateAnimated = animated(MrRate);
const MrGratitudeAnimated = animated(MrGratitude);
const MrGoalAnimated = animated(MrGoal);

function MrMainContent({ step, dataStores, updateDataStore, direction }) {
  // set up transition
  const transitions = useTransition(
    step,
    null,
    direction === "back"
      ? {
          from: { transform: "translateX(-100%)", opacity: 0 },
          enter: { transform: "translateX(0)", opacity: 1 },
          leave: { transform: "translateX(100%)", opacity: 0 }
        }
      : {
          from: { transform: "translateX(100%)", opacity: 0 },
          enter: { transform: "translateX(0)", opacity: 1 },
          leave: { transform: "translateX(-100%)", opacity: 0 }
        }
  );
  console.log(transitions);

  const { rate, gratitude, goal } = dataStores;

  return (
    <Div key="thisakey">
      {transitions.map(({ item, key, props }) => {
        console.log(props);
        if (item === "rate") {
          return (
            <MrRateAnimated
              style={props}
              key={key}
              updateDataStore={updateDataStore}
              dataStore={rate}
              storeKey="rate"
            />
          );
        } else if (item === "gratitude") {
          return (
            <MrGratitudeAnimated
              style={props}
              key={key}
              updateDataStore={updateDataStore}
              dataStore={gratitude}
              storeKey="gratitude"
            />
          );
        } else {
          return (
            <MrGoalAnimated
              style={props}
              key={key}
              updateDataStore={updateDataStore}
              dataStore={goal}
              storeKey="goal"
            />
          );
        }
      })}
    </Div>
  );
}

MrMainContent.propTypes = {
  step: PropTypes.string.isRequired,
  dataStores: PropTypes.object.isRequired,
  updateDataStore: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired
};

export default MrMainContent;
