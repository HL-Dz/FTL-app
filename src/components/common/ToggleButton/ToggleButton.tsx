import React, { FC } from 'react';
import './ToggleButton.scss';

interface ToggleButtoProps {
  isVisible: boolean
  toggleElem: () => void
}

const ToggleButton: FC<ToggleButtoProps> = ({isVisible, toggleElem}) => {
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