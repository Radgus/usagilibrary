import React from 'react';
import styled from 'styled-components';
import colors from '../../../../resource/colors';

const Div = styled.div`
  display: flex;
  justify-content: center;
`;


const Btn = styled.button`
  padding: 0.5rem;
  background-color: ${colors.third_bg};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.secondary_text};
  border: none;
  border-radius: 0.5rem;
  width: 10rem;
  cursor: pointer;
  :hover {
    color: ${colors.fourth_text};
  }
`;

const Button = ({children, ...props}) => 
  <Div>
    <Btn {...props}>
      {children}
    </Btn>
  </Div>

export default Button;
