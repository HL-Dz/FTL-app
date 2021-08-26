import React from 'react';
import "./DisabeldComments.scss";
import stopComments from '../../../../assets/images/stop.png';

const DisabeldComments = () => {
  return (
    <div className="disabled-comments" style={{backgroundImage: `url(${stopComments})`}}>
      <span>Comments are disabled for this article</span>
    </div>
  )
}

export default DisabeldComments;