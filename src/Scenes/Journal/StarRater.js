import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Star from './Star';

const Div = styled.div`
  grid-column: 2/-2;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white30};
  font-size: 1.7rem;
  margin-bottom: 10px;
  word-wrap: none;
  min-width: 900px;
`;

const StarsWrapper = styled.div`
  display: flex;
`;

function StarRater({ title }) {
  const [rating, setRating] = useState(null);
  const [hoveredStar, setHoveredStar] = useState(0);

  function handleClick({ starNumber }) {
    setRating(starNumber);
  }

  function handleHover({ starNumber }) {
    setHoveredStar(starNumber);
  }

  const stars = [1, 2, 3, 4, 5];
  return (
    <Div rater>
      <Label>{title}</Label>
      <StarsWrapper>
        {stars.map((star) => (
          <Star
            key={star}
            starNumber={star}
            handleClick={handleClick}
            handleHover={handleHover}
            ratingValue={rating || 0}
            hoverValue={hoveredStar}
          />
        ))}
      </StarsWrapper>
    </Div>
  );
}

export default StarRater;
