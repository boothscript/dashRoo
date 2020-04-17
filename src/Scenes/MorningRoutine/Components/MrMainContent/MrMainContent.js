import React, { useContext } from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

import { MrRate, MrGratitude, MrGoal } from './Components';
import { MorningRoutineContext } from '../../../../lib/Context/MorningRoutineContext';

const Div = styled.div`
  grid-column: 2/-2;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const MrRateAnimated = animated(MrRate);
const MrGratitudeAnimated = animated(MrGratitude);
const MrGoalAnimated = animated(MrGoal);

// transition logic
function getTransitionConfig(step, direction) {
  if (direction === 'back') {
    return {
      from: { transform: 'translateX(-100%)', opacity: 0 },
      enter: { transform: 'translateX(0)', opacity: 1 },
      leave: { transform: 'translateX(100%)', opacity: 0 },
    };
  } else if (direction === 'fwd' && step === 'rate') {
    return {
      from: { transform: 'translateX(0)', opacity: 0 },
      enter: { transform: 'translateX(0)', opacity: 1 },
      leave: { transform: 'translateX(100%)', opacity: 0 },
    };
  } else {
    return {
      from: { transform: 'translateX(100%)', opacity: 0 },
      enter: { transform: 'translateX(0)', opacity: 1 },
      leave: { transform: 'translateX(-100%)', opacity: 0 },
    };
  }
}

function MrMainContent() {
  const { state } = useContext(MorningRoutineContext);

  // set up transition
  const transitions = useTransition(
    state.step,
    null,
    getTransitionConfig(state.step, state.direction)
  );

  return (
    <Div>
      {transitions.map(({ item, key, props }) => {
        if (item === 'rate') {
          return <MrRateAnimated style={props} key={key} dataKey="ratings" />;
        } else if (item === 'gratitude') {
          return (
            <MrGratitudeAnimated style={props} key={key} dataKey="gratitude" />
          );
        } else if (item === 'goal') {
          return <MrGoalAnimated style={props} key={key} dataKey="goal" />;
        } else {
          return <></>;
        }
      })}
    </Div>
  );
}

// MrMainContent.propTypes = {
//   step: PropTypes.string.isRequired,
//   dataStores: PropTypes.object.isRequired,
//   updateDataStore: PropTypes.func.isRequired,
//   direction: PropTypes.string.isRequired,
// };

export default MrMainContent;
