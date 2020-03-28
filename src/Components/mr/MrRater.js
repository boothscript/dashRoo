import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { MrRateText, MrRateStar, MrRateStars } from "./elements";

const Div = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-around;
  overflow: auto;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding: 2em 0;
  }
`;

function MrRater({ text, inputId, confirmFn }) {
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
    <Div rater>
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
    </Div>
  );
}

export default MrRater;
