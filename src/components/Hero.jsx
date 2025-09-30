import React from 'react';
import '../index.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Rishaba</h1>
        <p className="tagline">Digital Artist & Photoshop Manipulation Expert</p>
        <p>I blend creative passion with technical precision, specializing in vibrant digital paintings and high-end photo retouching for a flawless, imaginative result.</p>
        <a href="#portfolio" className="cta-button">View My Portfolio</a>
      </div>
    </section>
  );
};

export default Hero;