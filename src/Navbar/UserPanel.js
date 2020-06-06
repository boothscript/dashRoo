import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  grid-column: 8 / span 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProfilePicture = styled.div`
    height: 45px;
    width: 45px;
    border-radius: 100%;
    background-image: url("/img/${(props) => props.url}");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 10px;

`;

const Name = styled.p`
  margin: 0 10px;
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white30};
`;

function UserPanel() {
  return (
    <Div>
      <Name>Ren Harris</Name>
      <ProfilePicture url="52.jpg" />
    </Div>
  );
}

export default UserPanel;
