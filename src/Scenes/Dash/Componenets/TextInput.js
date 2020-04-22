import styled from 'styled-components';

const TextInput = styled.input`
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;
  width: 100%;
  background: inherit;
  border: none;
  border-radius: 16px;
  background: ${(props) => props.theme.panel && props.theme.panel};
  color: ${(props) => props.theme.white90 && props.theme.white90};
  resize: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default TextInput;
