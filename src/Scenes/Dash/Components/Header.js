import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  grid-column: 1 / span 9;
  grid-row: 1 / span 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H3 = styled.h3`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white30};
  text-transform: uppercase;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

function Header({ title, children }) {
  return (
    <Div>
      <H3>{title}</H3>
      <ButtonWrapper>{children}</ButtonWrapper>
    </Div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
