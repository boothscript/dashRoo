import React from "react";

import { MrButton } from "./index";

function MrFooter({ nextPage, buttonText, fieldsCompleted }) {
  return (
    <div>
      <MrButton disabled={!fieldsCompleted} text={buttonText} url={nextPage} />
    </div>
  );
}

export default MrFooter;
