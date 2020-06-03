import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import JournalSpine from './JournalSpine';
import JournalPage from './JournalPage';

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: ${(props) => props.theme.darkest};
  color: ${(props) => props.theme.white30};
  padding-left: 20px;
`;

function Journal() {
  const [openPage, setOpenPage] = useState('morningRoutine');

  return (
    <Div>
      <JournalSpine
        title="Morning Routine"
        sectionName="morningRoutine"
        openFunc={setOpenPage}
      />
      <JournalPage open={openPage === 'morningRoutine'} />
      <JournalSpine
        title="Developer Log"
        sectionName="devLog"
        openFunc={setOpenPage}
      />
      <JournalPage open={openPage === 'devLog'} />
      <JournalSpine
        title="Evening Routine"
        sectionName="eveningRoutine"
        openFunc={setOpenPage}
      />
      <JournalPage open={openPage === 'eveningRoutine'} />
    </Div>
  );
}

export default Journal;
