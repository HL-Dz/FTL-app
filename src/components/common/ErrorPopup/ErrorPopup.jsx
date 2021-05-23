import React from 'react';
import "./ErrorPopup.scss";

const ErrorPopup = () => {
  return (
    <div className="error">
      <i className="fas fa-exclamation-circle error-icon"></i>
      Requests limit exceeded (max 10/min). Please, try reload page (Ctrl+R or Cmd+R) a little later. 
    </div>
  )
}

export default ErrorPopup;