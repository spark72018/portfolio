import React from 'react';

export default function About({ logoImgSrc }) {
  return (
    <section id="about" className="container fade-in">
      <h2>About</h2>
      <img alt="self logo" id="self-logo" src={logoImgSrc} />
      <article className="description">
        <p>
          I'm a passionate Front-End Developer with experience in React and
          Node, based in New York. Recipient and graduate of the Grow with
          Google Udacity Front-End Scholarship, your search for a developer with
          a devotion to learning ends here. I hope to hear from you!
        </p>
      </article>
    </section>
  );
}
