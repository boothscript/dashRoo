import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  background: ${(props) => props.theme.panel};
  grid-column: ${(props) => (props.gridCol ? props.gridCol : '')};
  grid-row: ${(props) => props.gridRow || ''};
  border-radius: 16px;
`;

const P = styled.p`
  text-transform: uppercase;
  color: ${(props) => props.theme.white30};
  font-family: ${(props) => props.theme.font};
  margin-left: 1em;
`;

function PlaceholderPanel({ text, gridCol, gridRow }) {
  return (
    <Div gridCol={gridCol} gridRow={gridRow}>
      <P>{text}</P>
    </Div>
  );
}

PlaceholderPanel.propTypes = {
  text: PropTypes.string.isRequired,
  gridCol: PropTypes.string.isRequired,
  gridRow: PropTypes.string.isRequired,
};

export default PlaceholderPanel;
