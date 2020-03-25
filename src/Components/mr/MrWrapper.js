import React from "react";

import { MrGrid, MrMain, MrWelcome } from "./elements";
import MrButton from "./MrButton";

function MrWrapper({ children }) {
  return (
    <MrMain>
      <MrGrid>
        <MrWelcome>Good Morning, Steve!</MrWelcome>
        {children}
        <MrButton text="next"></MrButton>
      </MrGrid>
    </MrMain>
  );
}

export default MrWrapper;
