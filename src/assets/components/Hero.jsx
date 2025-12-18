import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">R. Bhagya Lakshmi</h1>
          <h3 className="hero-sub">GHMC-Licensed Architectural Compliance Consultant</h3>
          <p className="hero-desc">Ensuring architectural plans meet required regulations for a smoother approval process.</p>
          <a className="hero-cta" href="#projects">View my work</a>
        </div>

        <div className="hero-right">
          <div className="hero-card" aria-hidden></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
