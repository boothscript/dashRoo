import React from "react";

import { MrGrid, MrMain, MrWelcome } from "./elements";
import MrButton from "./MrButton";

function MrWrapper({ children, fieldsCompleted, nextPage }) {
  console.log({ children });

  return (
    <MrMain>
      <MrGrid>
        <MrWelcome>Good Morning, Steve!</MrWelcome>
        {children}
        <MrButton
          disabled={!fieldsCompleted}
          text="next"
          url={nextPage}
        ></MrButton>
      </MrGrid>
    </MrMain>
  );
}

export default MrWrapper;
