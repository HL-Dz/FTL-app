import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import "./Whoops.scss";
import ronaldo from '../../../assets/images/ronaldo.png';
import halland from '../../../assets/images/halland.png';
import ball from '../../../assets/images/ball.png';
import { ILocationProps } from '../../../types/common';

interface WhoopsPprops {
  location: ILocationProps
}

const Whoops: FC<WhoopsPprops> = ({location}) => {
  return (
    <div className="primary-container whoops">
      <div className="container">
        <div className="whoops__wrap">
          <div className="whoops__player">
            <img className="whoops__img" src={ronaldo} alt="Ronaldo" />
          </div>
          <div className="whoops__primary">
            <div className="whoops__title">
              <span>4</span><img className="whoops__ball" src={ball} alt="Ball" /><span>4</span>
            </div>
            <div className="whoops__desc">
              Don't panic! Resource not found at: <div className="whoops__path">{location.pathname}</div>
            </div>
          </div>
          <div className="whoops__player">
            <img className="whoops__img" src={halland} alt="Halland" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Whoops;