import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  grid-column: 1 / span 9;
  grid-row: 1 / span 1;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid ${(props) => props.theme.white30};
`;

const H3 = styled.h3`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white90};
`;

function Header({ title }) {
  return (
    <Div>
      <H3>{title}</H3>
    </Div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
