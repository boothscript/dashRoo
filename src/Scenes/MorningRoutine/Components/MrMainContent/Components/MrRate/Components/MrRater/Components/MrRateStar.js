import React from 'react';
import styled from 'styled-components';

const Star = styled.div`
  background: ${(props) =>
    props.fill === 'heavy'
      ? 'url(/img/star-fill-heavy.svg)'
      : props.fill === 'light'
      ? 'url(/img/star-fill-light.svg)'
      : 'url(/img/star-line.svg)'};
  height: 46px;
  width: 50px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function MrRateStar({
  starNumber,
  handleClick,
  handleHover,
  ratingValue,
  hoverValue,
}) {
  // star fill logic
  function starFill() {
    if (ratingValue >= starNumber) {
      return 'heavy';
    }
    if (hoverValue >= starNumber) {
      return 'light';
    }
    return 'none';
  }

  function handleMouseEnter() {
    handleHover({ starNumber });
  }
  function handleMouseLeave() {
    handleHover({ starNumber: null });
  }

  return (
    <Star
      fill={starFill()}
      onClick={() => handleClick({ starNumber })}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    />
  );
}

// MrRateStar.propTypes = {
//   starNumber: PropTypes.number.isRequired,
//   handleClick: PropTypes.func.isRequired,
//   handleHover: PropTypes.func.isRequired,
//   ratingValue: PropTypes.number,
//   hoverValue: PropTypes.number
// };

export default MrRateStar;
