import React from 'react';
import './Projects.css';

import img1 from '../logo/project-1.png';
import img2 from '../logo/project-2.png';
import img3 from '../logo/project-3.jpeg';

const projects = [
  {
    title: 'GVR Breeze – Sainikpuri',
    desc:
      'Architectural design reviewed and cross-checked against GHMC building regulations.',
    img: img1,
  },
  {
    title: 'GVR Central Vistas – Yapral',
    desc:
      'Reviewed the architectural layout to verify alignment with GHMC planning norms.',
    img: img2,
  },
  {
    title: 'Residential Complex - Banjara Hills',
    desc:
      'Ensuring adherence to GHMC setback and FAR requirements.',
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
