import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import JournalSpine from './JournalSpine';
import JournalPage from './JournalPage';
import JournalTextArea from './JournalTextArea';
import JournalSingleLineEntry from './JournalSingleLineEntry';
import StarRater from './StarRater';
import Gratitude from './Gratitude';
import { JournalContext } from '../../lib/Context/JournalContext';
import { updateField } from '../../lib/Actions/JournalActions';

const Div = styled.div`
  grid-column: 1/ -1;
  grid-row: 2 / span 9;
  display: flex;
  align-items: stretch;
  background: ${(props) => props.theme.darkest};
  color: ${(props) => props.theme.white30};
  padding-left: 20px;
`;

function Journal() {
  const [openPage, setOpenPage] = useState('morningRoutine');
  const { state, dispatch } = useContext(JournalContext);

  return (
    <Div>
      <JournalSpine
        title="Morning Routine"
        sectionName="morningRoutine"
        openFunc={setOpenPage}
        fields={state.data.morning}
      />
      <JournalPage open={openPage === 'morningRoutine'}>
        <StarRater
          title="Yesterdays Rating"
          changeFunc={(starNumber) => {
            dispatch(updateField('morning', 'dayRating', starNumber));
          }}
          value={state.data.morning.dayRating}
        />
        <StarRater
          title="Yesterdays Sleep Rating"
          changeFunc={(starNumber) => {
            dispatch(updateField('morning', 'sleepRating', starNumber));
          }}
          value={state.data.morning.sleepRating}
        />
        <Gratitude
          dataKey="morning"
          state={state}
          dispatch={dispatch}
          updateField={updateField}
        />
        <JournalSingleLineEntry
          title="Whats Today's Goal?"
          changeFunc={(e) => {
            dispatch(updateField('morning', 'goal', e.target.value));
          }}
          value={state.data.morning.goal}
        />
      </JournalPage>

      <JournalSpine
        title="Developer Log"
        sectionName="devLog"
        openFunc={setOpenPage}
        fields={state.data.devLog}
      />
      <JournalPage open={openPage === 'devLog'}>
        <JournalTextArea
          title="Dev Log Entry:"
          changeFunc={(e) => {
            dispatch(updateField('devLog', 'log', e.target.value));
          }}
          value={state.data.devLog.log}
        />
      </JournalPage>

      <JournalSpine
        title="Evening Routine"
        sectionName="eveningRoutine"
        openFunc={setOpenPage}
        fields={state.data.evening}
      />
      <JournalPage open={openPage === 'eveningRoutine'}>
        <JournalTextArea
          title="What Was Challenging Today?"
          changeFunc={(e) => {
            dispatch(updateField('evening', 'negative', e.target.value));
          }}
          value={state.data.evening.negative}
        />
        <JournalTextArea
          title="What Went Well Today?"
          changeFunc={(e) => {
            dispatch(updateField('evening', 'positive', e.target.value));
          }}
          value={state.data.evening.positive}
        />
        <Gratitude
          dataKey="evening"
          state={state}
          dispatch={dispatch}
          updateField={updateField}
        />
      </JournalPage>
    </Div>
  );
}

export default Journal;
