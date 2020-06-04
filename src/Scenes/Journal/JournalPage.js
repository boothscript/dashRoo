import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import JournalTextArea from './JournalTextArea';

const Div = styled.div`
  margin: ${(props) => (props.open ? '20px 40px 20px 0' : '20px 0')};
  padding: ${(props) => (props.open ? '40px 0 40px 0' : '40px 0 40px 0')};
  background: ${(props) => props.theme.panel};
  border-radius: 16px;
  flex-grow: 4;
  max-width: ${(props) => (props.open ? '1000px' : 0)};
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  width: 100%;
  display: grid;
  grid-template-columns: 120px minmax(0, 600px) 1fr;
  grid-row-gap: 40px;
`;

function JournalPage({ open, children }) {
  return <Div open={open}>{children}</Div>;
}

export default JournalPage;
