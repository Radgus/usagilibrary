import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../resource/colors';
import profileIcon from '../../../resource/images/profile-icon.png';
import CircularDiv from './CircularDiv';


const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .area {
    width: 8rem;
    min-height: 5rem;
    border: 0.1rem solid ${colors.third_bg};
    border-radius: 0.5rem;
    padding: 0.4rem;
    position: absolute;
    top: 7rem;
    text-align: center;
    background-color: ${colors.secondary_bg};
  }
`;

const H4 = styled.h4`
  cursor: pointer;
  :hover {
    background-color: ${colors.fourth_bg};
  }
  font-size: 1.1rem;
`;

const LoginContainer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
        <CircularDiv onClick={()=>setShowLogin(!showLogin)}>
          <img src={profileIcon} alt="logo macropay"/>
        </CircularDiv>
        {
          showLogin &&
          <div className="area">
            {
              isLogin 
              ? <>
              <p>Luis Domínguez</p>
              <br />
              <Link to="/login">
                <H4 onClick={()=>setShowLogin(!showLogin)}>Cerrar sesión</H4>
              </Link>
              </>
              : <H4>Iniciar sesión</H4>
            }
          </div>
        }
      </Container>
  )
}

export default LoginContainer;
