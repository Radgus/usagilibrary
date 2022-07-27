import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../resource/colors/index';
import LoginContainer from './components/LoginContainer';
import logo from '../../resource/images/macropay-logo.png';
import cartIcon from '../../resource/images/shopping-icon.png';
import CircularDiv from './components/CircularDiv';


const LogoContainer = styled.div`
  background-color: ${colors.third_bg};
  min-height: 7rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const Header = () => {

  return (
    <>
    <LogoContainer>
      <Link to="/"> 
        <img src={logo} alt="logo macropay" width='90px'/>
      </Link>
      <CircularDiv>
        <img src={cartIcon} alt="logo macropay" width='30px'/>
      </CircularDiv>
      <LoginContainer/>
    </LogoContainer>
    </>
  )
}

export default Header;
