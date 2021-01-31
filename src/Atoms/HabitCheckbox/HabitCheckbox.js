import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import animatedClickFunction, {
  checkAnimation,
} from '../../Scenes/Dash/Components/Services/checkboxAnimation';

export default function HabitCheckbox({
  value,
  onCheckboxClick,
  index,
  color,
  disabled,
}) {
  // Use ref to trigger animation when there is a value change
  const prevValueRef = useRef(null);

  useEffect(() => {
    prevValueRef.current = value;
  });

  function animate() {
    //    returns true if there is a change in value
    if (prevValueRef.current === null) {
      return false;
    }
    return prevValueRef.current !== value;
  }

  return (
    <Wrapper>
      <HabitCheckboxInput type="checkbox" checked={value} disabled />
      <AnimatedLabel
        disabled={disabled}
        onClick={
          (e) =>
            animatedClickFunction(e, value, color, disabled, () =>
              onCheckboxClick(index)
            )
          // eslint-disable-next-line react/jsx-curly-newline
        }
        color={color}
        animate={animate()}
      />
    </Wrapper>
  );
}

HabitCheckbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

HabitCheckbox.defaultProps = {
  disabled: false,
};

const Wrapper = styled.div`
  position: relative;
  width: 30px;
`;

const HabitCheckboxInput = styled.input`
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
    disabled ? theme.colors.white10 : theme.colors.white30};

  cursor: ${(props) => (props.disabled ? 'cursor' : 'pointer')};
  transition: none;
  ${HabitCheckboxInput}:checked + & {
    background: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
    animation: ${(props) => (props.animate ? checkAnimation : null)};
    transition: background 50ms linear 400ms, border 50ms linear 400ms;
  }
`;
