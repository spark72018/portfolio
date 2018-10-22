import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaGulp,
  FaSass,
  FaGit,
  FaNode
} from 'react-icons/fa';

export default function Skills({ skillsSectionRef }) {
  const iconStyles = {
    color: '#1DC17F',
    size: '5em'
  };
  return (
    <section ref={skillsSectionRef} id="skills" className="container fade-in">
      <h2>Skills</h2>
      <div className="icon-container">
        <IconContext.Provider value={iconStyles}>
          <FaJs />
          <FaReact />
          <FaCss3Alt />
          <FaHtml5 />
        </IconContext.Provider>
      </div>
      <div className="icon-container">
        <IconContext.Provider value={iconStyles}>
          <FaNode />
          <FaGulp />
          <FaSass />
          <FaGit />
        </IconContext.Provider>
      </div>
    </section>
  );
}
