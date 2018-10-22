import React from 'react';
import ProjectCard from './ProjectCard';

export default function FeaturedWork({ projectInfoArr }) {
  return (
    <section id='featured-work' className="container fade-in">
      <hr />
      <h2>Featured Work</h2>
      <div className="card-container">
        {projectInfoArr
          ? projectInfoArr.map((info, i) => (
              <ProjectCard key={`card${i}`} {...info} />
            ))
          : null}
      </div>
    </section>
  );
}
