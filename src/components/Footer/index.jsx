import React from "react";
import styled from "styled-components";
import colors from '../../resource/colors';
import facebook from '../../resource/images/facebook.jpg';
import instagram from '../../resource/images/instagram.png';
import twitter from '../../resource/images/twitter.png';
import  maps from '../../resource/images/maps.png';


const Container = styled.div`
  background-color: ${colors.fourth_bg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
`;

const Column = styled.div`
  padding: 1rem 2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  img {
    width: 2.3rem;
  }
  p {
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;

const Footer = () => {

  return (
    <Container>
      <Column>
        <a href='https://www.facebook.com/Macropay-104888348563048'>
          <Row>
            <img src={facebook} alt="facebook logo" />
            <p>Facebook</p>
          </Row>
        </a>
        <a href='https://www.instagram.com/macropayoficial_mx/?hl=es'>
        <Row>
          <img src={instagram} alt="facebook logo" />
          <p>Instagram</p>
        </Row>
        </a>
        <a href='https://twitter.com/MacropayOficial'>
        <Row>
          <img src={twitter} alt="facebook logo" />
          <p>Twitter</p>
        </Row>
        </a>
      </Column>
      <Column>
        <a href="https://goo.gl/maps/NDT5Pb9B7zKAC6Us5">
          <Row>
            <img src={maps} alt="facebook logo" />
            <p>Location</p>
          </Row>
        </a>
        <br />
        <div>
          <h3>Address</h3> 
          <p>C. 23 53a, Col. México, México, 97125 Mérida, Yuc.</p>
        </div>

      </Column>
    </Container>
  )
}

export default Footer;
