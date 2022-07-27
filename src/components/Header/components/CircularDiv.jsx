import React from 'react';
import styled from 'styled-components';
import colors from '../../../resource/colors';


const Container = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${colors.secondary_bg};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${colors.fourth_bg};
  }
  img {
    width: 3rem;
  }
`;


const CircularDiv = ({children, ...props}) => <Container {...props}>{children}</Container>

export default CircularDiv;
