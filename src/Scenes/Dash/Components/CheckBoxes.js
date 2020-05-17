import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  animatedClickFunction,
  AnimatedLabel,
  CustomCheckBoxAnimated,
} from './Services/checkboxAnimation';

const Wrapper = styled.div`
  position: relative;
  width: 30px;
`;
const WrapperAnimated = styled.div`
  position: relative;
  width: 30px;
`;

const CustomCheckBox = styled.input`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 0;
  left: 0;
  opacity: 1;
  background: red;
  & + label::before {
    border: 1px solid  ${(props) => props.theme.white30};
    border-radius: 6px;
    content: '';
    position: absolute;
    left: 0px;
    top: 0;
    height: 30px;
    width: 30px;
  }
  & + label::after {
    display: flex;
    justify-content: center;
    align-items: center;
  content: '${(props) => props.letter}';
  border: 1px solid  ${(props) => props.theme.white30};
    border-radius: 6px;
    position: absolute;
    left: 0px;
    top: 0;
    height: 30px;
    width: 30px;

    background: ${(props) => props.theme.panel};
    color: ${(props) => props.theme.white90};
    font-family: ${(props) => props.theme.font};
  }
  &:checked + label::after {
    background: ${(props) => props.theme.white90};
    color: ${(props) => props.theme.panel};
  }
`;

function CheckBox({ value, handleClick, index }) {
  function getLetter() {
    return ['M', 'T', 'W', 'T', 'F', 'S', 'S'][index];
  }

  return (
    <Wrapper>
      <CustomCheckBox
        type="checkbox"
        checked={value}
        letter={getLetter(index)}
      />
      <label onClick={() => handleClick(index)} />
    </Wrapper>
  );
}

CheckBox.propTypes = {
  value: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

function CheckBoxAnimated({ value, handleClick, index, color, disabled }) {
  const prevValueRef = useRef(null);

  useEffect(() => {
    prevValueRef.current = value;
  });

  function animate() {
    if (prevValueRef.current === null) {
      return false;
    }
    return prevValueRef.current !== value;
  }

  return (
    <WrapperAnimated>
      <CustomCheckBoxAnimated
        type="checkbox"
        checked={value}
        disabled={disabled}
      />
      <AnimatedLabel
        disabled={disabled}
        onClick={(e) =>
          animatedClickFunction(e, value, color, disabled, () =>
            handleClick(index)
          )
        }
        color={color}
        animate={animate()}
      />
    </WrapperAnimated>
  );
}
CheckBoxAnimated.propTypes = {
  value: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export { CheckBox, CheckBoxAnimated };
