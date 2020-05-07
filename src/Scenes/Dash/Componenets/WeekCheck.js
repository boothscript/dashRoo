import React from 'react';
import styled from 'styled-components';
import faker from 'faker';

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

function WeekCheck({ weekArray, updateWeekArray }) {
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
          key={faker.random.uuid()}
          value={item}
          index={index}
          handleClick={toggleItem}
        />
      ))}
    </Div>
  );
}

export default WeekCheck;
