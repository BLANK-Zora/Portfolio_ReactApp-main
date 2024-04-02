import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Param Saxena</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact Me</a>
                    </li>
                </ul>

                <div className="footer__social">

                    <a href="https://www.instagram.com/param.017/" className="home__social-icon" >
                        <i class="uil uil-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/param-saxena-b5b19625a/" className="home__social-icon" >
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/BLANK-Zora" className="home__social-icon" >
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer