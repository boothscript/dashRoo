import React, { useState } from "react";

import { MrPanel, MrRateText, MrRateStar, MrRateStars } from "./elements";

function MrRatePanel({ text }) {
  const [starState, setStarState] = useState({ selected: null, hovered: null });

  function handleClick({ value }) {
    setStarState(prevState => ({ ...prevState, selected: value }));
  }

  function handleHover({ value }) {
    setStarState(prevState => ({ ...prevState, hovered: value }));
    console.log(starState);
  }

  return (
    <MrPanel>
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
