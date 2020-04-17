import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: 100;

  display: inline-block;
  align-self: center;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeaderTitle = styled.p`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1.16;

  width: 220px;
  text-align: center;
  cursor: pointer;
`;

const List = styled.div`
  display: ${(props) => (props.state === 'open' ? 'inline-block' : 'none')};
  position: absolute;
  width: 220px;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 1);
  margin-top: -50px;
`;

const Item = styled.div`
  background: ${(props) => props.theme.panel};
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1.16;
  padding: 1.25em 0.75em;
  cursor: pointer;
  text-align: center;
`;

function Dropdown({ projectArr, currentProject, updateProjectSelected }) {
  const [dropState, setDropState] = useState('closed');

  function handleHeaderClick() {
    setDropState('open');
  }

  function handleItemClick(projectId) {
    setDropState('closed');
    updateProjectSelected(projectId);
  }

  return (
    <Wrapper>
      <Header>
        <HeaderTitle onClick={handleHeaderClick} color={currentProject.color}>
          {currentProject.title}
        </HeaderTitle>
      </Header>
      <List state={dropState}>
        {projectArr.map((project) => {
          return (
            <Item
              key={project.id}
              name={project.id}
              color={project.color}
              onClick={() => handleItemClick(project.id)}
            >
              {project.title}
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
}

export default Dropdown;
