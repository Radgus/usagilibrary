import React from "react";
import styled from "styled-components";
import colors from '../../resource/colors';
import searchIcon from '../../resource/images/search-icon.png';


const Container = styled.div`
  min-height: 7rem;
  background-color: ${colors.fourth_bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 60%;
  height: 3rem;
  background-color: ${colors.secondary_bg};
  border: none;
  outline: none;
  border-radius: 1rem 0 0 1rem;
  padding: 0 1rem 0 1rem;
`;

const DivImg = styled.div`
  width: 4rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary_bg};
  border-radius: 0 1rem 1rem 0;
  border-left: 0.1rem solid black;
  cursor: pointer;
  :hover {
    background-color: ${colors.fourth_bg};
    border: 0.1rem solid black;
  }
  img {
    width: 2.5rem;
  }
`;

const Search = () => {

  return (
    <Container>
      <Input />
      <DivImg>
        <img src={searchIcon} alt="Ícono de búsqueda"/>
      </DivImg>
    </Container>
  )
}

export default Search;
