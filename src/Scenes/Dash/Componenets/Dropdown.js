import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  z-index: 100;

  display: inline-block;
`;
const Header = styled.div`
  display: flex;
`;
const HeaderTitle = styled.p`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1.16;
  padding: 1.25em;
  cursor: pointer;
`;

const List = styled.div`
  display: ${(props) => (props.state === "open" ? "inline-block" : "none")};
  position: absolute;
  width: inherit;
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
  padding: 1.25em;
  cursor: pointer;
`;

function Dropdown({ projectArr, currentProject, updateProjectSelected }) {
  console.log(projectArr);
  console.log(currentProject);

  const [dropState, setDropState] = useState("closed");

  function handleHeaderClick() {
    setDropState("open");
  }

  function handleItemClick(projectId) {
    setDropState("closed");
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
