import React, { useState } from 'react';
import "./header.css";

function Header() {
  // change background header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY >= 90) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  })


  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <header className='header'>
      <nav className='nav container'>

        <div className={Toggle ? "nav__menu show_menu" : "nav__menu"}>
          <ul className="nav__list grid">

            <li className="nav__item">
              <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" onClick={() => setActiveNav('#qualification')} className={activeNav === '#qualification' ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i>Qualifications
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header