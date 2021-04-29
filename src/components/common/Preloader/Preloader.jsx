import React from 'react';
import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  )
}

export default Preloader;