import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../../resource/colors';
import products from '../../../resource/products/index';
import Popup from '../Popup';


const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  justify-items: center;
  @media (min-width: 300px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  min-width: 12.5rem;
  max-width: 25rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.secondary_bg};
  :hover {
    box-shadow: 3px 3px 10px rgb(0 28 73 / 1); 
  }
  img {
    width: 100%;
    cursor: pointer;
  }
`;

const Items = styled.div`
  margin-top: 1rem;
  width: 7.5rem;
  height: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  font-size: 1.5rem;
  border: 0.1rem solid ${colors.third_bg};
  input {
    width: 100%;
    outline: none;
    border: none;
  }
  button {
    width: 100%;
    height: 100%;
    color: ${colors.secondary_text};
    background-color: ${colors.third_bg};
    border: none;
    cursor: pointer;
  }
`;

const Galery = ({...props}) => {
  const [listProducts, setListProducts] = useState([...products]);
  const [showPopup, setShowPopup] = useState(false);
  const [productSelected, setProductSelected] = useState({});

  const handleProduct = (product) => {
    setShowPopup(true);
    setProductSelected({...product});
  }

  return (
    <>
    <Container>
      {
        listProducts.map(product => {
          return (
            <Card key={product.id}>
              <img 
                src={product.url} 
                alt=""
                onClick={()=>handleProduct(product)} 
              />
              <h3>{product.marca} </h3>
              <h4>{product.modelo} </h4>
              <h4>${product.precio} </h4>
              <Items>
                <button>+</button>
                <input type="num" value='0'/>
                <button>-</button>
              </Items>
            </Card>
          )
        })
      }
    </Container>
    {
      showPopup && 
      <Popup onClick={()=>setShowPopup(false)} data={productSelected}>
        <Card key={productSelected.id}>
          <img 
            src={productSelected.url} 
            alt=""
          />
          <h3>{productSelected.marca} </h3>
          <h4>{productSelected.modelo} </h4>
          <h4>${productSelected.precio} </h4>
          <Items>
            <button>+</button>
            <input type="num" value='0'/>
            <button>-</button>
          </Items>
        </Card>
      </Popup>
    }
    </>
  )
}

export default Galery;
