import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Checkbox({ value, text, onCheckboxChange, id }) {
  return (
    <Wrapper>
      <CustomCheckbox
        id={id}
        type="checkbox"
        checked={value}
        text={text}
        onChange={onCheckboxChange}
      />
      {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={id} />
    </Wrapper>
  );
}

function StringLengthLessThan2(props, propName, componentName) {
  if (props[propName].length > 2) {
    return new Error(
      `Invalid prop ${propName} supplied to' ${componentName}. Validation failed, String was too long`
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired, // used to join checkbox and label
  value: PropTypes.bool.isRequired,
  text: StringLengthLessThan2,
  onCheckboxChange: PropTypes.func,
};

Checkbox.defaultProps = {
  text: '',
};

const Wrapper = styled.div`
  position: relative;
  width: 30px;
`;

const CustomCheckbox = styled.input`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  & + label::before {
    border: 1px solid  ${(props) => props.theme.colors.white30};
    border-radius: 6px;
    content: '';
    position: absolute;
    left: 0px;
    top: 0;
    height: 30px;
    width: 30px;
    cursor: pointer;
    
  }
  & + label::after {
    display: flex;
    justify-content: center;
    align-items: center;
  content: '${(props) => props.text}';
  border: 1px solid  ${(props) => props.theme.colors.white30};
    border-radius: 6px;
    position: absolute;
    left: 0px;
    top: 0;
    height: 30px;
    width: 30px;
    cursor: pointer;
    background: ${(props) => props.theme.panel};
    color: ${(props) => props.theme.colors.white90};
    font-family: ${(props) => props.theme.font.main};
  }
  &:checked + label::after {
    background: ${(props) => props.theme.colors.white90};
    color: ${(props) => props.theme.colors.panel};
  }
`;
