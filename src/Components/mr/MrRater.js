import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

function MrRater({ text, inputKey, dataStore, updateMethod }) {
  const [hoveredStar, setHoveredStar] = useState(0);

  function handleClick({ starNumber }) {
    updateMethod(inputKey, starNumber);
  }

  function handleHover({ starNumber }) {
    setHoveredStar(starNumber);
  }

  return (
    <Div rater>
      <MrRateText>{text}</MrRateText>
      <MrRateStars>
        <MrRateStar
          starNumber={1}
          ratingValue={dataStore[inputKey]}
          hoverValue={hoveredStar}
          handleClick={handleClick}
          handleHover={handleHover}
        ></MrRateStar>
        <MrRateStar
          starNumber={2}
          ratingValue={dataStore[inputKey]}
          hoverValue={hoveredStar}
          handleClick={handleClick}
          handleHover={handleHover}
        ></MrRateStar>
        <MrRateStar
          starNumber={3}
          ratingValue={dataStore[inputKey]}
          hoverValue={hoveredStar}
          handleClick={handleClick}
          handleHover={handleHover}
        ></MrRateStar>
        <MrRateStar
          starNumber={4}
          ratingValue={dataStore[inputKey]}
          hoverValue={hoveredStar}
          handleClick={handleClick}
          handleHover={handleHover}
        ></MrRateStar>
        <MrRateStar
          starNumber={5}
          ratingValue={dataStore[inputKey]}
          hoverValue={hoveredStar}
          handleClick={handleClick}
          handleHover={handleHover}
        ></MrRateStar>
      </MrRateStars>
    </Div>
  );
}

MrRater.propTypes = {
  text: PropTypes.string.isRequired,
  inputId: PropTypes.number,
  confirmFn: PropTypes.func
};

export default MrRater;
