import React, { FC } from 'react';
import './Spinner.scss';

const Spinner: FC = () => {
  return (
    <div className="spinner-container">
      <i className="fas fa-sync spinner"></i>
    </div>
  )
}

export default Spinner;