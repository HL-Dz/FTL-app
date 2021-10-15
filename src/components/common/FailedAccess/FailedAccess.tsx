import React from 'react';
import Loading from '../Loading/Loading';
import "./FailedAccess.scss";

const FailedAccess = () => {
  return (
    <div className="admin-wrap">
      <div className="failed-access">
        <div className="failed-access__content">
          No access. Please wait...
        </div>
        <Loading/> 
      </div>
    </div>
  )
}

export default FailedAccess;