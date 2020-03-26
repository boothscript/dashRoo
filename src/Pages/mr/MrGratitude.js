import React from "react";

import { MrWrapper, MrTextEntryPanel } from "../../Components/mr";

function MrGratitude() {
  return (
    <MrWrapper>
      <MrTextEntryPanel inputId={1} />
      <MrTextEntryPanel inputId={0} />
      <MrTextEntryPanel inputId={2} />
    </MrWrapper>
  );
}

export default MrGratitude;
