import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import colors from '../../../resource/colors/index';


const LoginAreaContainer = styled.div`
  border: 0.1rem solid ${colors.secondary_bg};
  border-radius: 1rem;
  width: 70%;
  min-height: 50%;
  padding: 5rem 3rem;
  background-color: white;
  > * {
   margin-top : 1rem;
  }
  > *:first-child {
    margin-top: 0px;
  }
`;


const LoginArea = ({children}) => {
  return (
    <LoginAreaContainer>
      {children}
    </LoginAreaContainer>
  );
};

export default LoginArea;
