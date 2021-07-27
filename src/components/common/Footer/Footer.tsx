import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.scss";

interface IFooter {
  isFetchError: boolean
  isFetching: boolean
}

const Footer: FC<IFooter> = ({isFetchError, isFetching}) => {
  if(isFetchError) return null;
  
  return (
    <div className={isFetching ? "footer footer_inactive" : "footer"}>
      <div className="container-width">
        <div className="footer-info">
          <div className="footer-nav">
            <NavLink to="/" className="footer-nav__link">Home</NavLink>
            <NavLink to="/clubs" className="footer-nav__link">Saved clubs</NavLink>
            <NavLink to="/documentation" className="footer-nav__link">Documentation</NavLink>
          </div>
          <div className="dev-contacts">
            <span>Developer contacts: </span>
            <a 
              href="tg://resolve?domain=user_online7" 
              className="dev-link" 
              target="_blank" 
              rel="noreferrer"
              title="Telegram"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a 
              href="https://github.com/HL-Dz" 
              className="dev-link" 
              target="_blank" 
              rel="noreferrer"
              title="Github"
            >
              <i className="fab fa-github-square dev-icon"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/web-d/" 
              className="dev-link" 
              target="_blank" 
              rel="noreferrer"
              title="Linkedin"
            >
              <i className="fab fa-linkedin dev-icon"></i>
            </a>
            <a 
              href="mailto:hlushak.dzmitry@gmail.com" 
              className="dev-link" 
              target="_blank" 
              rel="noreferrer"
              title="Gmail"
            >
              <i className="fas fa-envelope dev-icon"></i>
            </a>
          </div>
        </div>
        <div className="copyright">
          <span>TFL - top football leagues © 2021</span>
          <span>
            Football data provided by the  
            <a href="https://www.football-data.org/" target="_blank" rel="noreferrer"> Football-Data.org </a>
            API
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer;