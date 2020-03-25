import React from "react";

import { MrGrid, MrMain, MrWelcome } from "./elements";

function MrWrapper() {
  return (
    <MrMain>
      <MrGrid>
        <MrWelcome>Good Morning, Steve!</MrWelcome>
      </MrGrid>
    </MrMain>
  );
}

export default MrWrapper;
