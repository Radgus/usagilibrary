import React from 'react';
import styled from 'styled-components';
import colors from '../../../resource/colors/index';


const Input = styled.input`
  outline: none;
  border: 0.1rem solid ${colors.primary_bg};
  background-color: ${colors.primary_bg};
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
  width: 100%;
  &:focus{
    box-shadow: 0px 0px 5px ${colors.secondary_bg};
  }
`;

const InputText = ({...props}) => {

  return (
    <Input 
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

export default InputText;