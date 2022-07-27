import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../../resource/colors';


const Container = styled.div`
  color: ${colors.primary_text};
  a {
    text-decoration: none;
    color: ${colors.primary_text};
    :hover {
      color: ${colors.fifth_text};
    }
  }
`;


const Dropdown = ({title, url='/'}) => {
  return (
    <Container>
      <Link to = {url}>
        <h2>{title}</h2>
      </Link>
    </Container>
  )
} 

export default Dropdown;
