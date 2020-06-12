import React, { useContext } from 'react';
import styled from 'styled-components';

import { JournalContext } from '../../../lib/Context/JournalContext';
import { updateField } from '../../../lib/Actions/JournalActions';
import TextInput from './TextInput';

const Div = styled.div`
  grid-column: 1 / span 6;
  grid-row: 3 / span 1;
  background: ${(props) => props.theme.panel && props.theme.panel};
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 0 1em;
`;

function TodaysGoal() {
  const { state, dispatch } = useContext(JournalContext);

  function handleChange(e) {
    dispatch(updateField('morning', 'goal', e.target.value));
  }

  return (
    <Div>
      <TextInput
        data-testid="goalInput"
        value={state.data.morning.goal || 'no input'}
        onChange={handleChange}
        noBorder
        small
      />
    </Div>
  );
}

export default TodaysGoal;
