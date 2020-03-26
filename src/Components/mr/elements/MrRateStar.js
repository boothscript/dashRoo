import React from "react";
import styled from "styled-components";

const Star = styled.div`
  background: ${props =>
    props.fill === "heavy"
      ? "url(/img/star-fill-heavy.svg)"
      : props.fill === "light"
      ? "url(/img/star-fill-light.svg)"
      : "url(/img/star-line.svg)"};
  width: 48px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function MrRateStar({ value, handleClick, handleHover, starState }) {
  // star fill logic
  function starFill() {
    if (starState.selected >= value) {
      return "heavy";
    } else if (starState.hovered >= value) {
      return "light";
    } else {
      return "none";
    }
  }

  function handleMouseEnter() {
    handleHover({ value });
  }
  function handleMouseLeave() {
    handleHover({ value: null });
  }

  return (
    <Star
      fill={starFill()}
      onClick={() => handleClick({ value })}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    />
  );
}

export default MrRateStar;
