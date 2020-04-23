import React from 'react';
import styled from 'styled-components';

import { useMorningRoutineContext } from '../../../Hooks/useMorningRoutineContext';
import { updateField } from '../../../lib/Actions/MorningRoutineActions';
import TextInput from './TextInput';

const Div = styled.div`
  grid-column: 1 / span 6;
  grid-row: 2 / span 1;
  background: ${(props) => props.theme.panel && props.theme.panel};
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 0 1em;
`;

function TodaysGoal() {
  const { state, dispatch } = useMorningRoutineContext();

  function handleChange(e) {
    dispatch(updateField('goal', 'text', e.target.value));
  }

  return (
    <Div>
      <TextInput
        data-testid="goalInput"
        value={state.data.goal.text}
        onChange={handleChange}
      />
    </Div>
  );
}

export default TodaysGoal;
