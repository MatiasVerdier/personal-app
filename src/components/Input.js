import styled from 'styled-components';

const Input = styled.input`
  font-size: 1.20em;
  padding: 0.5em;
  margin: 0.5em;
  color: #2c3e50;
  background: #ecf0f1;
  border: none;
  border-radius: 3px;
  min-width: 250px;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

export default Input;