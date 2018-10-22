import React from 'react';

export default function HamburgerButton({
  handleHamburgerButtonClick,
  open,
  onWhiteBackground
}) {
  let buttonBackground, firstLine, secondLine, thirdLine;

  if (open) {
    buttonBackground = 'hamburger open purple-background';
    firstLine = 'line white-background';
    secondLine = 'line';
    thirdLine = 'line white-background';
  } else if (onWhiteBackground) {
    buttonBackground = 'hamburger purple-background';
    firstLine = secondLine = thirdLine = 'line white-background';
  } else {
    buttonBackground = 'hamburger white-background';
    firstLine = secondLine = thirdLine = 'line purple-background';
  }
  return (
    <button onClick={handleHamburgerButtonClick} className={buttonBackground}>
      <span className={firstLine} />
      <span className={secondLine} />
      <span className={thirdLine} />
    </button>
  );
}
