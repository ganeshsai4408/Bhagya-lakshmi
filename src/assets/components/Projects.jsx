import React from 'react';
import './Projects.css';

import img1 from '../logo/pro-img.jpg';
import img2 from '../logo/pro-img.jpg';
import img3 from '../logo/pro-img.jpg';

const projects = [
  {
    title: 'Residential Complex - Banjara Hills',
    desc:
      'Residential Complex compliance review and plan correction for a 5-story residential building, ensuring adherence to GHMC setback and FAR requirements.',
    img: img1,
  },
  {
    title: 'Residential Complex - Banjara Hills',
    desc:
      'Residential Complex compliance review and plan correction for a 5-story residential building, ensuring adherence to GHMC setback and FAR requirements.',
    img: img2,
  },
  {
    title: 'Residential Complex - Banjara Hills',
    desc:
      'Residential Complex compliance review and plan correction for a 5-story residential building, ensuring adherence to GHMC setback and FAR requirements.',
    img: img3,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <h2 className="projects-title">Past Projects</h2>
        <div className="projects-row">
          {projects.map((p, idx) => (
            <article className="project-card" key={idx}>
              <div className="project-image">
                <img src={p.img} alt={p.title} />
              </div>

              <div className="project-info">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
