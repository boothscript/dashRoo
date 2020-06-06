import React from 'react';
import styled from 'styled-components';

import UserPanel from './UserPanel';

const Div = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 20px;
`;

const Brand = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  object-fit: cover;
`;

const Links = styled.div`
  grid-column: 2 / span 3;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Link = styled.a`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white30};
  text-decoration: none;
  font-weight: 300;
  padding: 20px;
`;

const DateSelector = styled.div`
  grid-column: 5 / span 3;
`;

function Navbar() {
  return (
    <Div>
      <Brand>
        <Logo src="/img/logo.svg" />
      </Brand>
      <Links>
        <Link href="#">Dash</Link>
        <Link href="#">Journal</Link>
        <Link href="#">Settings</Link>
      </Links>
      <DateSelector />
      <UserPanel />
    </Div>
  );
}

export default Navbar;
