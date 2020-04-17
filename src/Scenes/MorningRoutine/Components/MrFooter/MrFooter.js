import React, { useContext } from 'react';
import styled from 'styled-components';

import MrButton from './Components/MrButton';
import { MorningRoutineContext } from '../../../../lib/Context/MorningRoutineContext';
import { goBack } from '../../../../lib/Actions/MorningRoutineActions';

const Div = styled.div`
  grid-column: 2/-2;

  align-self: start;
  padding-top: 2em;
  display: flex;
  justify-content: space-between;
`;

function MrFooter({ buttonProp }) {
  const { dispatch } = useContext(MorningRoutineContext);

  console.log('buttonprop', buttonProp);
  const {
    nextButtonText,
    displayBackButton,
    isEnabled,
    fwdButtonAction,
  } = buttonProp;

  return (
    <Div>
      <MrButton
        text="back"
        buttonFunc={() => dispatch(goBack())}
        hide={!displayBackButton}
      />

      <MrButton
        disabled={!isEnabled}
        text={nextButtonText}
        buttonFunc={() => dispatch(fwdButtonAction())}
      />
    </Div>
  );
}

// MrFooter.propTypes = {
//   buttonFunc: PropTypes.func.isRequired,
//   nextDisabled: PropTypes.bool.isRequired,
//   buttonProps: PropTypes.object.isRequired,
// };

export default MrFooter;
