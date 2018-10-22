import React from 'react';

export default function Logo({src}) {
  return (
    <div className="logo-container">
      <img id="logo" alt="logo" src={src} />
    </div>
  );
}
