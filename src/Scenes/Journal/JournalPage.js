import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  margin: ${(props) => (props.open ? '20px 40px 20px 0' : '20px 0')};
  padding: ${(props) => (props.open ? '20px' : 0)};
  background: ${(props) => props.theme.panel};
  border-radius: 16px;
  flex-grow: 4;
  max-width: ${(props) => (props.open ? '1000px' : 0)};
  overflow: hidden;
  transition: all 0.4s ease-in-out;
`;

function JournalPage({ open }) {
  return <Div open={open}>Content</Div>;
}

export default JournalPage;
