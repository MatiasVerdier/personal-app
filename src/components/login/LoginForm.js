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
    return (
      <Form>
        <FormField>
          <Input type="email" placeholder="Tu direccion de correo"></Input>
        </FormField>
        
        <FormField>
          <Input type="password" placeholder="Tu contraseña"></Input>
        </FormField>
        
        <Button>Sign In</Button>
        <Button primary>Sign Up</Button>
      </Form>
    );
};

export default LoginForm;