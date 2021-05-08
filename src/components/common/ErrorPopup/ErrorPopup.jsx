import React from 'react';
import "./ErrorPopup.scss";

const ErrorPopup = () => {
  return (
    <div className="error">
      Requests limit exceeded (max 10/min). Please, try reload page a little later. 
    </div>
  )
}

export default ErrorPopup;