import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  display: grid;
  grid-template-rows: repeat(9, minmax(0, 1fr));
  grid-template-columns: repeat(9, minmax(0, 1fr));
  grid-gap: 5px;
  padding: 10px 20px;
  background: ${(props) => props.theme[props.bgColor]};
  border-radius: 16px;
`;

function PanelGrid({ row, column, bgColor, children }) {
  return (
    <Div row={row} column={column} bgColor={bgColor}>
      {children}
    </Div>
  );
}
PanelGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  row: PropTypes.string,
  column: PropTypes.string,
  bgColor: PropTypes.string,
};

PanelGrid.defaultProps = {
  bgColor: 'panel',
};

export default PanelGrid;
