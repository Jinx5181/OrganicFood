// src/components/Header.js
import React from "react";
//import "./Header.css";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>OrganicDelight</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#product">Fruits</a>
          </li>
          <li>
            <a href="#product">Grains</a>
          </li>
          <li>
            <a href="#product">Vegetables</a>
          </li>
          <li>
            <a href="#footer">Other Organic Ingredients</a>
          </li>
        </ul>
      </nav>
      <div className="cart-icon">
        <span>Cart ({cartItems.length})</span>
      </div>
    </header>
  );
};

export default Header;