import React from 'react';
import styled from 'styled-components'


const FormContainer = styled.form`
  padding: 1rem;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  > * {
   margin-top : 0.5rem;
  }
  > *:first-child {
    margin-top: 0px;
  }
`;

const Form = ({children, ...props}) => <FormContainer {...props}>{children}</FormContainer>

export default Form;
