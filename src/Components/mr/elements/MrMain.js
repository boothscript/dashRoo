import styled from "styled-components";

export default styled.main`
  background: ${props => props.theme.darkest && props.theme.darkest};
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns:
    minmax(1em, 1fr) minmax(200px, 900px)
    minmax(1em, 1fr);
`;
