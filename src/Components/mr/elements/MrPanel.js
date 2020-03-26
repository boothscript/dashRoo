import styled from "styled-components";

export default styled.div`
  background: ${props => props.theme.panel && props.theme.panel};
  border-radius: 16px;
  grid-column: ${props => (props.strech ? "1 / -1" : "span 1")};
  display: flex;
  justify-content: space-around;
  padding: 2em;
`;
