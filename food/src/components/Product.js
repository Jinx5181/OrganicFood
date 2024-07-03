// src/components/Product.js
import React from "react";
import "./Product.css";

const Product = ({ name, price, description, image, addToCart }) => {
  return (
    <div
      id="product"
      className="product"
      onClick={() => addToCart({ name, price, image })}
    >
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="price">RS:{price}</p>
    </div>
  );
};

export default Product;