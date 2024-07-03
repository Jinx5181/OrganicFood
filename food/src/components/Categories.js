import React from 'react';
import { Link, useParams } from 'react-router-dom';

const categories = {
  fruits: ['Apple', 'Banana'],
  vegetables: ['Carrot', 'Broccoli'],
};

function Categories() {
  const { category } = useParams();
  const items = categories[category] || [];

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Categories;
