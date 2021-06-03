import React, {useState} from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';
import NavigationDropdown from '../common/NavigationDropdown/NavigationDropdown';

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showDropdopwn = () => setDrop(true);
  const hideDropdown = () => setDrop(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          tfl <span className="logo-description">- top football leagues</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu nav-menu-active" : "nav-menu"}>
          <li className="nav-item" onMouseOver={showDropdopwn} onMouseOut={hideDropdown}>
            <Link to="/" className="nav__link" onClick={closeMenu}>
              Leagues
              <i className="fas fa-globe"></i>
            </Link>
            <div className={drop ? "nav-dropdown" : "nav-dropdown nav-dropdown_hidden"}>
              <NavigationDropdown hideDropdown={hideDropdown}/>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/clubs" className="nav__link" onClick={closeMenu}>
              Saved clubs
              <i className="fas fa-folder"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/documentation" className="nav__link" onClick={closeMenu}>
              Documentation
              <i className="far fa-file-alt"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;