import React from 'react';
import "./Preloader.scss";

const Preloader = ({color}) => {
  let preloaderColor = color ? `loader_${color} loader` : 'loader';
  
  return (
    <div className={preloaderColor}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  )
}

export default Preloader;