// src/components/Home.js
import React from 'react';
import './Home.css';
import heroImage from '../images/slider-1.png';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Welcome to OrganicDelight</h1>
        <p>Experience the best organic products directly from the farm.</p>
      </div>
    </section>
  );
};

export default Home;
