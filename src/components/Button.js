import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? '#2980b9' : 'white'};
  color: ${props => props.primary ? 'white' : '#2980b9'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2980b9;
  border-radius: 3px;
  
  &:hover {
    border: 2px solid #2980b9;
  }
`;

export default Button;