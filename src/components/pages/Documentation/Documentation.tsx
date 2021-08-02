import React, { FC } from 'react';
import Footer from '../../common/Footer/Footer';
import "./Documentation.scss";

const Documentation: FC = () => {
  return (
    <div className="primary-container info">
      <div className="container">
        <h1 className="info__title">Information</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Documentation;