import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MrRateStar from "./Components/MrRateStar";
import { MorningRoutineContext } from "../../../../../../../../lib/Context/MorningRoutineContext";

const Div = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-around;
  overflow: auto;
  background: #171a21;
  border-radius: 16px;
  padding: 2em;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding: 2em 0;
  }
`;

const MrRateStars = styled.div`
  flex-basis: 60%;
  display: flex;
  justify-content: center;
`;

const MrRateText = styled.h2`
  margin: 0;
  margin-left: 2em;
  font-family: ${(props) => props.theme.font && props.theme.font};
  font-weight: 300;
  color: ${(props) => props.theme.white90 && props.theme.white90};
  align-self: center;
  flex-basis: 40%;
  @media (max-width: 500px) {
    margin: 0 0 0.5em 0;
  }
`;

function MrRater({ text, inputKey, dataKey }) {
  const { state, dispatch } = useContext(MorningRoutineContext);
  const [hoveredStar, setHoveredStar] = useState(0);

  function handleClick({ starNumber }) {
    dispatch({
      type: "UPDATE_FIELD",
      dataKey,
      field: inputKey,
      value: starNumber,
    });
  }

  function handleHover({ starNumber }) {
    setHoveredStar(starNumber);
  }

  const stars = [1, 2, 3, 4, 5];
  console.log("test", state.data);
  return (
    <Div rater>
      <MrRateText>{text}</MrRateText>
      <MrRateStars>
        {stars.map((star) => (
          <MrRateStar
            key={star}
            starNumber={star}
            handleClick={handleClick}
            handleHover={handleHover}
            ratingValue={state.data.ratings[inputKey]}
            hoverValue={hoveredStar}
          />
        ))}
      </MrRateStars>
    </Div>
  );
}

// MrRater.propTypes = {
//   text: PropTypes.string.isRequired,
//   inputId: PropTypes.number,
//   confirmFn: PropTypes.func
// };

export default MrRater;
