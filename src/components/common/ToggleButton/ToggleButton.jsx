import React from 'react';
import './ToggleButton.scss';

const ToggleButton = ({isVisible, toggleElem}) => {
  return (
    <>
      {
        isVisible ? 
        <i className="fas fa-minus scorers__icon" onClick={toggleElem}></i> :
        <i className="fas fa-plus scorers__icon" onClick={toggleElem}></i>
      }
    </>
  )
}

export default ToggleButton;