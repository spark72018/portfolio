import React from 'react';
import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer({ linkedinLink, githubLink }) {
  const iconStyles = {
    color: '#1DC17F',
    size: '3em'
  };
  return (
    <footer>
      <div className="icon-container">
        <IconContext.Provider value={iconStyles}>
          <a target="_blank" rel="noopener noreferrer" href={linkedinLink}>
            <FaLinkedinIn />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={githubLink}>
            <FaGithub />
          </a>
        </IconContext.Provider>
      </div>
    </footer>
  );
}
