import React from 'react';
import logo from './logoYad.svg'; // נניח שהלוגו נמצא במיקום זה
import './navbar.css'; // הקובץ שמכיל את הסגנונות שלך

function Navbar() {
  return (
    <nav className="navbar">
      <div className="upNav"> 
        <img src={logo} alt="Your Logo" className="logos"/>
      </div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
        <div className="menu">
          {/* ... כל הפריטים של התפריט שלך ... */}
          <li><a href="/">דף הבית</a></li>
          <li><a href="/about">אודות</a></li>
          <li className="services">
            <a href="/services">שירותים</a>
            {/* תפריט נפתח */}
          </li>
          <li><a href="/contact">צור קשר</a></li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
