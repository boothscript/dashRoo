import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import JournalSpine from './JournalSpine';
import JournalPage from './JournalPage';
import JournalTextArea from './JournalTextArea';
import JournalSingleLineEntry from './JournalSingleLineEntry';
import StarRater from './StarRater';
import Gratitude from './Gratitude';

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
        ticks={4}
      />
      <JournalPage open={openPage === 'morningRoutine'}>
        <StarRater title="Yesterdays Rating" />
        <StarRater title="Yesterdays Sleep Rating" />
        <Gratitude />
        <JournalSingleLineEntry title="Whats Today's Goal?" />
      </JournalPage>

      <JournalSpine
        title="Developer Log"
        sectionName="devLog"
        openFunc={setOpenPage}
        ticks={1}
      />
      <JournalPage open={openPage === 'devLog'}>
        <JournalTextArea title="Dev Log Entry:" />
      </JournalPage>

      <JournalSpine
        title="Evening Routine"
        sectionName="eveningRoutine"
        openFunc={setOpenPage}
        ticks={3}
      />
      <JournalPage open={openPage === 'eveningRoutine'}>
        <JournalTextArea title="What Was Challenging Today?" />
        <JournalTextArea title="What Went Well Today?" />
        <Gratitude />
      </JournalPage>
    </Div>
  );
}

export default Journal;
