import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  animatedClickFunction,
  AnimatedLabel,
  CustomCheckBoxAnimated,
} from './Services/checkboxAnimation';

const Wrapper = styled.div`
  position: relative;
`;

const CustomCheckBox = styled.input`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 0;
  left: 0;
  opacity: 0;
  & + label::before {
    border: 1px solid  ${(props) => props.theme.white30};
    border-radius: 6px;
    content: '';
    position: absolute;
    left: -34px;
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
    left: -34px;
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
  function getLetter(index) {
    return ['M', 'T', 'W', 'T', 'F', 'S', 'S'][index];
  }

  return (
    <Wrapper>
      <CustomCheckBox
        type="checkbox"
        checked={value}
        letter={getLetter(index)}
      />
      <label onClick={() => handleClick(index)}></label>
    </Wrapper>
  );
}

function CheckBoxAnimated({ value, handleClick, index, color }) {
  const prevValueRef = useRef(null);

  useEffect(() => {
    prevValueRef.current = value;
  });

  function animate() {
    console.log(prevValueRef.current);
    if (prevValueRef.current === null) {
      return false;
    }
    return prevValueRef.current !== value;
  }

  return (
    <Wrapper>
      <CustomCheckBoxAnimated type="checkbox" checked={value} />
      <AnimatedLabel
        onClick={(e) =>
          animatedClickFunction(e, value, color, () => handleClick(index))
        }
        color={color}
        animate={animate()}
      />
    </Wrapper>
  );
}

export { CheckBox, CheckBoxAnimated };
