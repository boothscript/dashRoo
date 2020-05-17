import styled, { css, keyframes } from 'styled-components';
import mojs from '@mojs/core';

// MO.JS ANIMATION

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

function animatedClickFunction(e, checked, color, disabled, clickFunc) {
  console.log({ disabled });
  if (!checked && !disabled) {
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
  if (!disabled) {
    clickFunc();
  }
}

// CSS ANIMATION

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

const CustomCheckBoxAnimated = styled.input`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 0;
  left: 0;
  opacity: 0;
  margin: 0;
`;

const AnimatedLabel = styled.label`
  border-radius: 6px;
  position: absolute;
  left: 0px;
  top: 0;
  height: 30px;
  width: 30px;
  background: ${({ theme, disabled }) =>
    disabled ? theme.white10 : theme.white30};

  cursor: ${(props) => (props.disabled ? 'cursor' : 'pointer')};
  transition: none;
  ${CustomCheckBoxAnimated}:checked + & {
    background: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
    animation: ${(props) => (props.animate ? checkAnimation : null)};
    transition: background 50ms linear 400ms, border 50ms linear 400ms;
  }
`;

export { AnimatedLabel, animatedClickFunction, CustomCheckBoxAnimated };
