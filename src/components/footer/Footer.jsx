import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Umang</h1>        
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>            
            <a href="#work" className="footer__link">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <ul className="footer__social">
          <a href="https://www.linkedin.com/in/umang-raj-263013250/" className="footer__social-link" target="_blank"><i className="bx bxl-linkedin"></i></a>
          <a href="https://www.instagram.com/umxng_r/" className="footer__social-link" target="_blank"><i className="bx bxl-instagram"></i></a>
          <a href="https://github.com/gnamu03r" className="footer__social-link" target="_blank"><i className="bx bxl-github"></i></a>
        </ul>

        <span className="footer__copy">&#169; Umang. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer