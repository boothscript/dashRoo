import React, { useState, useEffect } from "react";

import { MrPanel, MrRateText, MrRateStar, MrRateStars } from "./elements";

function MrRatePanel({ text, inputId, confirmFn }) {
  const [starState, setStarState] = useState({ selected: null, hovered: null });

  function handleClick({ value }) {
    setStarState(prevState => ({ ...prevState, selected: value }));
    confirmFn({ inputId });
  }

  function handleHover({ value }) {
    setStarState(prevState => ({ ...prevState, hovered: value }));
  }

  // tell parent that rating has been made
  useEffect(() => {}, []);

  return (
    <MrPanel strech>
      <MrRateText>{text}</MrRateText>
      <MrRateStars>
        <MrRateStar
          value={1}
          starState={starState}
          handleClick={handleClick}
          handleHover={handleHover}
        ></MrRateStar>
        <MrRateStar
          value={2}
          starState={starState}
          handleClick={handleClick}
          handleHover={handleHover}
        ></MrRateStar>
        <MrRateStar
          value={3}
          starState={starState}
          handleClick={handleClick}
          handleHover={handleHover}
        ></MrRateStar>
        <MrRateStar
          value={4}
          starState={starState}
          handleClick={handleClick}
          handleHover={handleHover}
        ></MrRateStar>
        <MrRateStar
          value={5}
          starState={starState}
          handleClick={handleClick}
          handleHover={handleHover}
        ></MrRateStar>
      </MrRateStars>
    </MrPanel>
  );
}

export default MrRatePanel;
