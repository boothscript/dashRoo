import styled from 'styled-components';

export default styled.div`
  grid-column: 1/ -1;
  grid-row: 2 / span 9;
  background: ${(props) => props.theme.darkest && props.theme.darkest};

  display: grid;
  grid-template-columns:
    minmax(1em, 1fr) minmax(200px, 900px)
    minmax(1em, 1fr);
  grid-template-rows: 1fr 2fr 1fr;
  row-gap: 2em;
`;
