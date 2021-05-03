import React from 'react';
import { Link } from 'react-router-dom';
import { LeaguesData } from '../../pages/Leagues/LeaguesData';
import './NavigationDropdown.scss';

const NavigationDropdown = ({hideDropdown}) => {
  return (
    <div className="dropdown">
      <ul className="dropdown__list">
        {
          LeaguesData.map(elem => {
            return (
              <li className="dropdown__item" key={elem.id}>
                <Link className="dropdown__link" to={elem.path} onClick={hideDropdown}>
                  <div className="nav-pic">
                    <img className="nav-img" src={elem.imgSrcMini} alt={elem.title}/>
                  </div>
                  <div className="nav-text">{elem.title}</div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NavigationDropdown;