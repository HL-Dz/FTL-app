import React, { FC } from 'react';
import Footer from '../../common/Footer/Footer';
import "./Info.scss";
import InfoContent from './InfoContent';
import InfoNavigation from './InfoNavigation';

const Info: FC = () => {
  return (
    <div className="primary-container info">
      <div className="info__primary">
        <InfoNavigation/>
        <InfoContent/>
      </div>
      <Footer/>
    </div>
  )
}


export default Info;