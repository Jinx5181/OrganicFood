// src/App.js
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <Home />
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} />
      <Footer />
    </div>
  );
}

export default App;
