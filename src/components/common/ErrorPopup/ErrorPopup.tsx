import React, { FC } from 'react';
import "./ErrorPopup.scss";

interface IErrorPopup {
  message?: string
}


const ErrorPopup: FC<IErrorPopup> = ({message}) => {
  return (
    <div className="error">
      <i className="fas fa-exclamation-circle error-icon"></i>
        Requests limit exceeded (max 10/min). {message || 'Please, try reload page (Ctrl+R or Cmd+R) a little later.'}
    </div>
  )
}

export default ErrorPopup;