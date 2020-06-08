import React from 'react';
import styled from 'styled-components';

import UserPanel from './UserPanel';
import WeekSelector from './WeekSelector';

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
  width: 40px;
  object-fit: cover;
`;

const Links = styled.div`
  grid-column: 2 / span 2;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Link = styled.a`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white90};
  text-decoration: none;
  font-weight: 300;
  padding: 0 20px;
`;
const ActiveLink = styled.a`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white90};
  text-decoration: none;
  font-weight: 700;
  padding: 0 20px;
`;

function Navbar() {
  return (
    <Div>
      <Brand>
        <Logo src="/img/logo.svg" />
      </Brand>
      <Links>
        <ActiveLink href="#">Dash</ActiveLink>
        <Link href="#">Journal</Link>
        <Link href="#">Settings</Link>
      </Links>
      <WeekSelector />

      <UserPanel />
    </Div>
  );
}

export default Navbar;
