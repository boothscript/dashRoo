import styled from "styled-components";

export default styled.div`
  background: ${props =>
    props.panel ? props.theme.panel : props.theme.darkest};
  border-radius: 16px;
  width: 100%;
  height: 100%;
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  position: absolute;
  left: 0;
  top: 0;
`;
