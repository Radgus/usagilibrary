import React from 'react';
import styled from 'styled-components';
import colors from '../../../resource/colors';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20% 10%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

`;

const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  background-color: ${colors.secondary_bg};
  padding: 1rem 1.5rem;
  h1 {
    cursor: pointer;
  }
`;

const Caracteristics = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.secondary_bg};
  padding: 3rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;

const Content = styled.div`
  padding: 0 1rem;
  h3 {
    text-align: center;
  }
`;


const Popup = ({children, ...props}) => 
  <Container>
    <Close>
      <h1 onClick={props.onClick}>X</h1>
    </Close>
    <Caracteristics>
      <Grid>
        {children}
        <Content>
          <h3 className="title">Características</h3>
          <br />
          <Grid>
            <h4>Color: </h4>
            <p>{props?.data?.caracteristicas?.color}</p>
          </Grid>
          <Grid>
            <h4>Camara: </h4>
            <p>{props?.data?.caracteristicas?.camara}</p>
          </Grid>
          <Grid>
            <h4>RAM: </h4>
            <p>{props?.data?.caracteristicas?.RAM}</p>
          </Grid>
          <Grid>
            <h4>Sistema: </h4>
            <p>{props?.data?.caracteristicas?.sistema}</p>
          </Grid>
          <Grid>
            <h4>Procesador: </h4>
            <p>{props?.data?.caracteristicas?.procesador}</p>
          </Grid>
        </Content>

      </Grid>
    </Caracteristics>
  </Container>

export default Popup;
