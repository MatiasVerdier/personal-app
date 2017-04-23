import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import FormField from '../FormField';
import Input from '../Input';

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const LoginForm = (props) => {
  const preventSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Form onSubmit={preventSubmit}>
      <FormField>
        <Input type="email" placeholder="Tu direccion de correo" onChange={props.onEmailChange}></Input>
      </FormField>
      
      <FormField>
        <Input type="password" placeholder="Tu contraseña" onChange={props.onPasswordChange}></Input>
      </FormField>
      
      <FormField>
        <Button onClick={props.onSignIn}>Sign In</Button>
        <Button primary onClick={props.onSignUp}>Sign Up</Button>
      </FormField>
    </Form>
  );
};

export default LoginForm;