import styled from "styled-components";

export default styled.div`
  background: ${props => props.theme.panel && props.theme.panel};
  border-radius: 16px;
  grid-column: 1/-1;
  display: flex;
  justify-content: space-around;
`;
