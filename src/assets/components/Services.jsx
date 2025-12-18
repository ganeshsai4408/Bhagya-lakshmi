import React, { useState } from 'react';
import './Services.css';

import planImg from '../logo/arc-img.jpg';
import plan2Img from '../logo/plan-img.jpg';

const data = {
  review: {
    title: 'Architectural Plan Review',
    text:
      'A detailed review of your existing architectural plan to ensure it follows GHMC and Telangana building regulations. The plan is checked for setbacks, FAR, zoning, parking, and ventilation standards. Potential issues that may cause approval delays or rejections are identified early. Clear and practical guidance is provided on what needs to be corrected. This helps avoid repeated submissions and unnecessary redesigns, making the approval process smoother and more predictable.',
    img: planImg,
  },
  correction: {
    title: 'Plan Correction',
    text:
      'Refinement of the submitted architectural plan to meet GHMC and Telangana building regulations. Corrections may include adjustments to layouts, setbacks, FAR, parking, and height requirements. The original design intent is maintained while ensuring the plan meets all approval guidelines. Technical issues are resolved early to reduce objections and avoid delays. This results in a smoother and faster approval process.',
    img: plan2Img,
  },
};

const Services = () => {
  // `active` controls which tab is highlighted immediately.
  // `display` is the currently visible content; we animate between them.
  const [active, setActive] = useState('review');
  const [display, setDisplay] = useState('review');
  const [animating, setAnimating] = useState(false);

  const item = data[display];

  const switchTo = (tab) => {
    if (tab === display) {
      setActive(tab);
      return;
    }

    // highlight the button immediately
    setActive(tab);

    // start fade-out
    setAnimating(true);

    // after fade-out, swap content and fade-in
    setTimeout(() => {
      setDisplay(tab);
      // small timeout to allow browser to register DOM change before fading in
      setTimeout(() => setAnimating(false), 20);
    }, 200);
  };

  return (
    <section id="services" className="services">
      <div className="services-inner">
        <h2 className="services-title">Services</h2>

        <div className="services-tabs">
          <button
            className={`tab-btn ${active === 'review' ? 'active' : ''}`}
            onClick={() => switchTo('review')}
          >
            Architectural Plan Review
          </button>
          <button
            className={`tab-btn ${active === 'correction' ? 'active' : ''}`}
            onClick={() => switchTo('correction')}
          >
            Plan Correction
          </button>
        </div>

        <div className="service-card">
          <div className={`service-image ${animating ? 'fade-out' : 'fade-in'}`}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className={`service-body ${animating ? 'fade-out' : 'fade-in'}`}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
