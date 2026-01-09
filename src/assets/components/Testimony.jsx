import React from 'react';
import './Testimony.css';

const items = [
  {
    quote:
      "Her review helped us avoid multiple approval issues. The corrections were clear and accurate, and the plan moved forward without delays.",
    author: '-Ch.Chandra Shekar Reddy',
    designation: 'Private Client',
  },
  {
    quote:
      "Clear communication and precise corrections. The plan was approval-ready after her review, which saved us a lot of time.",
    author: '-M.Venkat Rao',
    designation: 'Gvr Constructions',
  },
  {
    quote:
      "Strong understanding of GHMC and Telangana regulations.Her clear dance significantly reduced approval time for our project.",
    author: '-Ravi Shekar',
    designation: 'Sai Metra Construction',
  },
];

const Testimony = () => {
  return (
    <section className="testimony">
      <div className="testimony-inner">
        <h2 className="testimony-title">Testimonials</h2>

        <div className="testimony-grid">
          {items.map((it, i) => (
            <article className="test-card" key={i}>
              <div className="quote-body">{it.quote}</div>
              <div className="quote-author">{it.author}</div>
              <div className="quote-designation">{it.designation}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
