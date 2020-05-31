import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  grid-column: 1 / span 9;
  grid-row: 1 / span 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
`;

const H4 = styled.h4`
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
      <H4>{title}</H4>
      <ButtonWrapper>{children}</ButtonWrapper>
    </Div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
