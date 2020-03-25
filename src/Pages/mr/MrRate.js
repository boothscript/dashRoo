import React from "react";

import { MrWrapper, MrRatePanel } from "../../Components/mr";

function MrRate() {
  return (
    <MrWrapper>
      <MrRatePanel text={"Rate Yesterday"} />
      <MrRatePanel text={"Rate Sleep"} />
    </MrWrapper>
  );
}

export default MrRate;
