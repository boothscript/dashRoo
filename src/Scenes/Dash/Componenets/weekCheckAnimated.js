import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import faker from 'faker';
import mojs from '@mojs/core';

// mo animation
const square = new mojs.Shape({
  radius: 35,
  radiusY: 35,
  shape: 'rect',
  stroke: '#ee9fd3',
  strokeWidth: { 2: 30 },

  fill: 'none',
  scale: { 0.45: 0.55 },
  opacity: { 1: 0 },
  duration: 350,
  easing: 'sin.out',
  isShowEnd: false,
});

const lines = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 15: 25 },
  angle: 0,
  count: 8,
  children: {
    shape: 'line',
    radius: 10,
    scale: 1,
    stroke: '#ee9fd3',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },

    duration: 700,
    easing: 'quad.out',
  },
});

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  margin: 15px 0;
`;

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
`;
const checkKeyframes = keyframes`
    40% {
      transform: scale(1.5, 0.5);
    }

    50% {
      transform: scale(0.5, 1.5);
    }

    60% {
      transform: scale(1.3, 0.6);
    }

    70% {
      transform: scale(0.8, 1.2);
    }

    100% {
      transform: scale(1, 1);
    }
`;

const checkAnimation = css`
  ${checkKeyframes} 0.6s linear;
`;

const AnimatedLabel = styled.label`
  border-radius: 6px;
  position: absolute;
  left: -34px;
  top: 0;
  height: 30px;
  width: 30px;
  background: ${(props) => props.theme.white30};
  cursor: pointer;

  ${CustomCheckBox}:checked + & {
    background: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
    animation: ${(props) => (props.animate ? checkAnimation : null)};
  }
`;

function CheckBox({ value, handleClick, index, color }) {
  console.log('****checkbox renders*****');
  function getLetter(index) {
    return ['M', 'T', 'W', 'T', 'F', 'S', 'S'][index];
  }

  function animatedClickFunction(e, checked) {
    if (!checked) {
      const pos = e.target.getBoundingClientRect();

      const timeline = new mojs.Timeline({ speed: 1.5, delay: 500 });

      timeline.add(square, lines);

      square.tune({
        left: pos.left + 15,
        top: pos.top + 15,
        stroke: color,
      });
      lines.tune({
        x: pos.left + 15,
        y: pos.top + 15,
        children: {
          stroke: color,
        },
      });

      timeline.play();
    }
    handleClick(index);
  }

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
      <CustomCheckBox type="checkbox" checked={value} />
      <AnimatedLabel
        onClick={(e) => animatedClickFunction(e, value)}
        color={color}
        animate={animate()}
      />
    </Wrapper>
  );
}

function WeekCheckAnimated({ weekArray, updateWeekArray, color }) {
  if (weekArray.length !== 7) {
    console.log({ weekArray });
    throw new Error('Array must be length of 7');
  }

  function toggleItem(toggleIndex) {
    console.log('running toggle');
    updateWeekArray(
      weekArray.map((item, index) => (toggleIndex === index ? !item : item))
    );
  }
  return (
    <Div>
      {weekArray.map((item, index) => (
        <CheckBox
          key={index}
          value={item}
          index={index}
          handleClick={toggleItem}
          color={color}
        />
      ))}
    </Div>
  );
}

export default WeekCheckAnimated;
