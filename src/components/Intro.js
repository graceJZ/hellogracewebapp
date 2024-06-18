import React from 'react';
import './Intro.css'; // Assume you have a CSS file for specific styles

const Intro = () => {
  return (
    <div className="intro-section" style={{ backgroundImage: 'url(/assets/background.jpg)' }}>
      <div className="overlay">
        <h1>Hello Grace Yoga</h1>
        <p>Experience tranquility and peace with our yoga programs</p>
        <button className="cta-button">Join Now</button>
      </div>
    </div>
  );
};

export default Intro;
