import React, { useContext } from 'react';

import { MorningRoutineContext } from '../../lib/Context/MorningRoutineContext';
import getButtonProps from './Services/getButtonProps';
import { MrHeader, MrMainContent, MrFooter, MrContainer } from './Components';

function MorningRoutine() {
  const { state } = useContext(MorningRoutineContext);

  return (
    <MrContainer className="page">
      <MrHeader />
      <MrMainContent direction={state.direction} />
      <MrFooter buttonProp={getButtonProps(state)} />
    </MrContainer>
  );
}

export default MorningRoutine;
