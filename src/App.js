
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ProductContext from './state/productContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dropdown from './pages/Dropdown';
import Button from './pages/Buttons';
import Cards from './pages/Cards';
import Forms from './pages/forms';
import Seekers from './pages/Seekers';


const App = () => {
  const [productsInCart, setProductsInCart] = useState([]);

  return (
    <ProductContext.Provider value={{ productsInCart, setProductsInCart }}>
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route exac path='/' element={<Home/>} />
            <Route exac path='/login' element={<Login/>} />
            <Route exac path='/dropdown' element={<Dropdown/>} />
            <Route exac path='/buttons' element={<Button/>} />
            <Route exac path='/cards' element={<Cards/>} />
            <Route exac path='/forms' element={<Forms/>} />
            <Route exac path='/seekers' element={<Seekers/>} />
          </Routes>
      </Layout>
    </BrowserRouter>
    
    
    </ProductContext.Provider>
  );
}

export default App;
