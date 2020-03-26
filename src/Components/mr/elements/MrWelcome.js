import styled from "styled-components";

export default styled.h1`
  font-family: ${props => props.theme.font && props.theme.font};
  font-weight: 800;
  color: ${props => props.theme.white90 && props.theme.white90};
  grid-column: 1/-1;
  align-self: end;
`;
