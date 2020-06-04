import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StarElement = styled.div`
  background: ${(props) => {
    if (props.fill === 'heavy') {
      return 'url(/img/star-fill-heavy.svg)';
    }
    return props.fill === 'light'
      ? 'url(/img/star-fill-light.svg)'
      : 'url(/img/star-line.svg)';
  }};
  height: 40px;
  width: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function Star({
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
    handleHover({ starNumber: 0 });
  }

  return (
    <StarElement
      fill={starFill()}
      onClick={() => handleClick({ starNumber })}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    />
  );
}

Star.propTypes = {
  starNumber: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleHover: PropTypes.func.isRequired,
  ratingValue: PropTypes.number.isRequired,
  hoverValue: PropTypes.number.isRequired,
};

export default Star;
