import React from 'react';
import { navigationData } from './InfoData';
import { Link } from 'react-scroll';

const InfoNavigation = () => {
  return (
    <aside className="info__sidebar">
      {
        navigationData.map(link => <Link
          key={link.id}
          className="info__link"
          activeClass="info__link_active"
          to={link.path}
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
        >
          <i className={link.cls}></i>
          <span>{link.text}</span>
        </Link>)
      }
    </aside>
  )
}

export default InfoNavigation
