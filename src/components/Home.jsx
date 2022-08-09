import React from 'react';
import Image from './images/Mathematics-bro.svg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1>Welcome to our page!</h1>
        <p>
          Math Magicians is a website for all fans of mathematics. It is a
        </p>
        <p>
          Single Page App (SPA) that allows users to: Make simple calculations
          and Read a random math-related quotes.
        </p>
      </div>
      <div className="image">
        <img src={Image} alt="math" />
      </div>
    </div>
  );
}

export default Home;
