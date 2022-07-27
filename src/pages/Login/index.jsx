import React from 'react';
import styled from 'styled-components';
import LoginArea from './components/LoginArea';
import Button from '../Buttons/components/Button';
import colors from '../../resource/colors';


const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  background-color: ghostwhite;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  background-color: ${colors.primary_bg};
  border: none;
  outline: none;
  border-radius: 1rem 0 0 1rem;
  padding: 0 1rem 0 1rem;
`;

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  }

  return(
    <Container>
      <LoginArea>
        <H1 textAlign='center'>Login</H1>
        <form id='myform' onSubmit={(e)=>handleSubmit(e)}>
          <label name='user'><h3>Usuario</h3></label>
          <br />
          <Input 
            type='text'
            name='user'
            placeholder='user name ...'
          />
          <br />
          <br />
          <br />
          <label name='user'><h3>Contraseña</h3></label>
          <br />
          <Input 
            type='password'
            name='passeord'
            placeholder='password ...'
          />
          <br />
          <br />
          <br />
          <Button>Enviar</Button>
        </form>
      </LoginArea>
    </Container>
  )
}

export default Login;