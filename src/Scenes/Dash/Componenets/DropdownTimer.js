import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  z-index: 100;

  display: inline-block;
  align-self: center;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeaderTitle = styled.p`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => (props.color ? props.color : props.theme.white90)};
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1.16;

  width: 220px;
  text-align: center;
  cursor: pointer;
  &::after {
    font-size: 1.25em;
    content: '▾';
    margin-left: 10px;
  }
`;

const List = styled.div`
  display: ${(props) => (props.state === 'open' ? 'inline-block' : 'none')};
  position: absolute;
  width: 220px;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 1);
  margin-top: -50px;
`;

const Item = styled.div`
  background: ${(props) => props.theme.panel};
  font-family: ${(props) => props.theme.font};
  color: ${(props) => (props.color ? props.color : props.theme.white90)};
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1.16;
  padding: 1.25em 0.75em;
  cursor: pointer;
  text-align: center;
`;

function Dropdown({ valueArray, stateValue, updateValue, colors = {} }) {
  const [dropState, setDropState] = useState('closed');

  function handleHeaderClick() {
    setDropState('open');
  }

  function handleItemClick(value) {
    setDropState('closed');
    updateValue(value);
  }

  return (
    <Wrapper>
      <Header>
        <HeaderTitle
          onClick={handleHeaderClick}
          color={colors[stateValue] || undefined}
        >
          {stateValue}
        </HeaderTitle>
      </Header>
      <List state={dropState}>
        {valueArray.map((value) => (
          <Item
            key={value}
            name={value}
            color={colors[value] || undefined}
            onClick={() => handleItemClick(value)}
          >
            {value}
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}

Dropdown.propTypes = {
  updateValue: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
  valueArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  colors: PropTypes.object,
};
Dropdown.defaultProps = {
  colors: {},
};

export default Dropdown;
