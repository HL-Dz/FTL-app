import React, {useState} from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          ftl <span className="logo-description">- football top leagues</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu nav-menu-active" : "nav-menu"}>
          <li className="nav-item">
            <div className="bg-block"></div>
            <Link to="/" className="nav__link" onClick={closeMenu}>Leagues</Link>
          </li>
          <li className="nav-item">
          <div className="bg-block"></div>
            <Link to="/clubs" className="nav__link" onClick={closeMenu}>Saved clubs</Link>
          </li>
          <li className="nav-item">
            <div className="bg-block"></div>
            <Link to="/info" className="nav__link" onClick={closeMenu}>Info</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;