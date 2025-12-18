import React from 'react';
import './Testimony.css';

const items = [
  {
    quote:
      "Bhagya Lakshmi's expertise saved us months of delays. Her thorough compliance review identified issues we never would have caught, and the plan was approved on first submission.",
    author: '-Pravallika',
  },
  {
    quote:
      "Bhagya Lakshmi's expertise saved us months of delays. Her thorough compliance review identified issues we never would have caught, and the plan was approved on first submission.",
    author: '-Pravallika',
  },
  {
    quote:
      "Bhagya Lakshmi's expertise saved us months of delays. Her thorough compliance review identified issues we never would have caught, and the plan was approved on first submission.",
    author: '-Pravallika',
  },
];

const Testimony = () => {
  return (
    <section className="testimony">
      <div className="testimony-inner">
        <h2 className="testimony-title">Testimonial</h2>

        <div className="testimony-grid">
          {items.map((it, i) => (
            <article className="test-card" key={i}>
              <div className="quote-body">{it.quote}</div>
              <div className="quote-author">{it.author}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
