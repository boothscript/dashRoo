import React from 'react';
import styled from 'styled-components';

import { useMorningRoutineContext } from '../../../Hooks/useMorningRoutineContext';
import { updateField } from '../../../lib/Actions/MorningRoutineActions';

const Div = styled.div`
  grid-column: 3 / span 4;
  grid-row: 2 / span 1;
  background: ${(props) => props.theme.panel && props.theme.panel};
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 0 1em;
`;

const Input = styled.input`
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;
  width: 100%;
  background: inherit;
  border: none;
  border-radius: 16px;
  background: ${(props) => props.theme.panel && props.theme.panel};
  color: ${(props) => props.theme.white90 && props.theme.white90};
  resize: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function TodaysGoal() {
  const { state, dispatch } = useMorningRoutineContext();

  function handleChange(e) {
    dispatch(updateField('goal', 'text', e.target.value));
  }

  return (
    <Div>
      <Input
        data-testid="goalInput"
        value={state.data.goal.text}
        onChange={handleChange}
      />
    </Div>
  );
}

export default TodaysGoal;
