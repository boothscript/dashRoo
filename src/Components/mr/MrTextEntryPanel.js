import React from "react";
import styled from "styled-components";

import { MrPanel } from "./elements";
import theme from "../../Themes/colors";

const MrGratitudeInput = styled.textarea`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  height: 100%;
  width: 100%;
  background: inherit;
  border: none;
  color: ${props => props.theme.white90 && props.theme.white90};
  resize: none;
  outline: none;
`;

function MrTextEntryPannel({ inputId, confirmFn }) {
  const handleChange = e => {
    if (e.target.value) {
      console.log(e.target.value);
      confirmFn({ inputId });
    }
  };

  return (
    <MrPanel>
      <MrGratitudeInput onChange={e => handleChange(e)} />
    </MrPanel>
  );
}

export default MrTextEntryPannel;
