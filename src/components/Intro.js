import React from 'react';
import Logo from './Logo';

export default function Intro({ logoImgSrc }) {
  return (
    <section id='intro' className="container fade-in">
      <header>
        <Logo src={logoImgSrc} />
      </header>
      <div className="intro-name">
        <h1>Saung</h1>
        <h1>Park</h1>
      </div>
      <h3>Developer&ensp;&nbsp;/&ensp;&nbsp;Explorer</h3>
    </section>
  );
}
