import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  border: solid 1px ${(props) => props.theme.white30};
  border-radius: 6px;
  border-bottom: none;
  display: inline-block;
  align-self: center;
  margin-right: 1em;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: solid 1px ${(props) => props.theme.white30};
`;
const HeaderTitle = styled.p`
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.selected ? props.theme.white90 : props.theme.white30};
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.5;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 1em 0.6em;
  margin: 0;
  cursor: pointer;

  &::after {
    content: '▾';
    margin-left: 10px;
  }
`;

const List = styled.div`
  display: ${(props) => (props.state === 'open' ? 'inline-block' : 'none')};
  position: absolute;
  width: 100%;
  max-height: 130px;
  overflow: scroll;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 1);
  border: solid 1px ${(props) => props.theme.white30};
  border-radius: 6px;
  border-top: none;
`;

const Item = styled.div`
  background: ${(props) => props.theme.panel};
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white90};
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 300;

  line-height: 1.16;
  padding: 1em 0.6em;
  cursor: pointer;
`;

function Dropdown({
  valueArray,
  stateValue,
  updateValue,
  placeholder,
  colors = {},
}) {
  const [dropState, setDropState] = useState('closed');
  const [selected, setSelected] = useState(!placeholder);

  function handleHeaderClick() {
    setDropState('open');
  }

  function handleItemClick(value) {
    setDropState('closed');
    setSelected(true);
    updateValue(value);
  }

  function getHeaderValue() {
    if (!placeholder) {
      return stateValue;
    }
    return selected ? stateValue : placeholder;
  }

  return (
    <Wrapper>
      <Header>
        <HeaderTitle
          onClick={handleHeaderClick}
          color={colors[stateValue] || undefined}
          selected={selected}
        >
          {getHeaderValue()}
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
  placeholder: PropTypes.bool.isRequired,
};
Dropdown.defaultProps = {
  colors: {},
};

export default Dropdown;
