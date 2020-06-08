import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  grid-row: 2 / span 1;
  grid-column: 1 / -1;
  /* background: black; */
  position: relative;
  /* 
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -10px;
    height: 40px;
    width: 10px;
    background: black;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: -10px;
    height: 40px;
    width: 10px;
    background: black;
  } */
`;

function Subbar() {
  return <Div></Div>;
}

export default Subbar;
