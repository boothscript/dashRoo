import React from "react";

import { MrWelcome } from "./elements/";

function MrHeader({ nextPage, buttonText, fieldsCompleted }) {
  return (
    <div>
      <MrWelcome>Good Morning, Steve</MrWelcome>
    </div>
  );
}

export default MrHeader;
