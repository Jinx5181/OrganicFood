// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>RS:{item.price}</p>
              </div>
            </li>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
    </div>
  );
};
export default Cart;