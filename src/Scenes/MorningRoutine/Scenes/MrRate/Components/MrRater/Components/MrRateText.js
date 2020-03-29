import styled from "styled-components";

export default styled.h2`
  margin: 0;
  margin-left: 2em;
  font-family: ${props => props.theme.font && props.theme.font};
  font-weight: 300;
  color: ${props => props.theme.white90 && props.theme.white90};
  align-self: center;
  flex-basis: 40%;
  @media (max-width: 500px) {
    margin: 0 0 0.5em 0;
  }
`;
