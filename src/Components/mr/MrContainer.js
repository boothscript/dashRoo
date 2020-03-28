import styled from "styled-components";

export default styled.div`
  background: ${props => props.theme.darkest && props.theme.darkest};
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns:
    minmax(1em, 1fr) minmax(200px, 900px)
    minmax(1em, 1fr);
  grid-template-rows: 1.2fr 1.6fr 1.2fr;
  row-gap: 2em;
  & > * {
    grid-column: 2 / -2;
    display: flex;
  }
`;
