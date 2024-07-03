// src/components/ProductList.js
import React from 'react';
import './ProductList.css';

import appleImage from '../images/apple.jpg';
import milkImage from '../images/milk.jpg';
import riceImage from '../images/rice.jpg';
import Orange from '../images/orange.jpg';
import Guava from '../images/guava.jpg';
import Grapes from '../images/grapes.jpg';
import PineApple from '../images/pineApple.jpeg';
import Asparagus from '../images/Asparagus.jpeg';
import Brinjal from '../images/Brinjal.jpeg';
import Cabbage from '../images/Cabbage.jpg';
import Carrot from '../images/Carrot.jpeg';
import Cauliflower from '../images/Cauliflower.jpeg';
import Ginger from '../images/Ginger.jpeg';
import Potato from '../images/Potato.jpeg';
import Spinach from '../images/Spinach.jpeg';
import Tomato from '../images/Tomato.jpeg';
import Beetroot from '../images/Beetroot.jpeg';
import Cucumber from '../images/Cucumber.jpeg';
import Broccoli from '../images/Broccoli.jpeg';
import Rambutan from '../images/rambutan.jpeg';
import Pomegranate from '../images/pomegranate.jpeg';
import Papaya from '../images/papaya.jpeg';
import Raspberries from '../images/Raspberries.jpeg';
import StarFruit from '../images/starfruit.jpeg';
import Strawberries from '../images/strawberries.jpeg';

const products = [
  { name: 'Organic Apple', price: 50, description: 'Fresh organic apples.', image: appleImage },
  { name: 'Organic Rambutan', price: 34, description: 'Pure organic Rambutan.', image: Rambutan },
  { name: 'Organic Pomegranate', price: 70, description: 'High-quality organic Pomegranate.', image: Pomegranate },
  { name: 'Organic orange', price: 50, description: 'Fresh organic Orange.', image: Orange },
  { name: 'Organic Guava', price: 34, description: 'Pure organic Guava.', image: Guava },
  { name: 'Organic grapes', price: 70, description: 'High-quality organic grapes.', image: Grapes },
  { name: 'Organic PineApple', price: 70, description: 'High-quality organic pineApple.', image: PineApple },
  { name: 'Organic Papaya', price: 50, description: 'Fresh organic Papaya.', image: Papaya },
  { name: 'Organic Raspberries', price: 34, description: 'Pure organic Raspberries.', image: Raspberries },
  { name: 'Organic StarFruit', price: 70, description: 'High-quality organic Fruit.', image: StarFruit},
  { name: 'Organic Strawberries', price: 50, description: 'Fresh organic Strawberries.', image: Strawberries },
  { name: 'Organic Guava', price: 34, description: 'Pure organic Guava.', image: Guava },
];
const veg = [
  { name: 'Organic Asparagus', price: 50, description: 'Fresh organic Asparagus.', image: Asparagus },
  { name: 'Organic Brinjal', price: 34, description: 'Pure organic Brinjal.', image: Brinjal },
  { name: 'Organic Cabbage', price: 70, description: 'High-quality organic Cabbage.', image: Cabbage},
  { name: 'Organic Carrot', price: 50, description: 'Fresh organic Carrot.', image: Carrot },
  { name: 'Organic Cauliflower', price: 34, description: 'Pure organic Cauliflower.', image: Cauliflower },
  { name: 'Organic Giner', price: 70, description: 'High-quality organic Ginger.', image: Ginger },
  { name: 'Organic Potato', price: 70, description: 'High-quality organic potato.', image: Potato },
  { name: 'Organic Spinach', price: 70, description: 'High-quality organic Spinach.', image: Spinach },
  { name: 'Organic Tomato', price: 50, description: 'Fresh organic Tomato.', image: Tomato },
  { name: 'Organic Beetroot', price: 34, description: 'Pure organic Beetroot.', image: Beetroot},
  { name: 'Organic Cucumber', price: 70, description: 'High-quality organic Cucumber.', image: Cucumber },
  { name: 'Organic Broccoli', price: 70, description: 'High-quality organic Broccoli.', image: Broccoli},
];

const ProductCard = ({ name, price, description, image, addToCart, onRemove }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <p className="price">RS:{price}</p>
      <button onClick={() => addToCart(name, price)}>Add to Cart</button>
      <button onClick={() => onRemove(name)}>Remove from Cart</button>
      <div className="hover-text">Buy now and get 10% off!</div>
    </div>
  );
};

const ProductList = ({ addToCart, onRemove }) => {
  return (
    <section id="products" className="product-list">
      <h1> FRUITS </h1>
      <div id='product' className="products">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            addToCart={addToCart}
            onRemove={onRemove}
          />
        ))}
      </div>
      <h1>VEGETABLE</h1>
      <div className="products">
        {veg.map((veg, index) => (
          <ProductCard
            key={index}
            name={veg.name}
            price={veg.price}
            description={veg.description}
            image={veg.image}
            addToCart={addToCart}
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
