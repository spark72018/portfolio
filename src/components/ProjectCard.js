import React from 'react';

export default function ProjectCard({
  title,
  liveLink,
  repoLink,
  live,
  techUsed,
  appType,
  backgroundImage
}) {
  const style = { backgroundImage: `url(${backgroundImage})` };
  return (
    <div className="card-wrapper">
      <a
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        href={live ? liveLink : repoLink}
        className="project-card"
      >
        {title}
      </a>
      <div className="card-overlay">
        <h3>{title}</h3>
        <h4>{appType}</h4>
        <h4>Technologies used:</h4>
        <h5>{techUsed}</h5>
        <h6>{live ? '(Live site)' : '(Repo)'}</h6>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="project-repo"
        href={repoLink}
      >
        Click Here for Repository
      </a>
    </div>
  );
}
