import React from 'react';
import { HAMBURGER_MENU_OPTIONS } from '../constants';

export default function HamburgerMenu({ open, handleClick }) {
  return (
    <nav className={`${open ? 'hamburger-menu open' : 'hamburger-menu'}`}>
      <ul>
        {HAMBURGER_MENU_OPTIONS.map(({itemName, href}, i) => (
          <li onClick={handleClick} key={`menuItem${i}`}><a href={href}>{itemName}</a></li>
        ))}
      </ul>
    </nav>
  );
}
