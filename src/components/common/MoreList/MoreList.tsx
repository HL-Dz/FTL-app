import React, { FC } from 'react';
import "./MoreList.scss";

interface MoreListProps {
  showMoreList?: () => void
}

const MoreList: FC<MoreListProps> = ({showMoreList}) => {
  return (
    <div className="more-list">
      <button className="operation__button" onClick={showMoreList}><span>More articles</span></button>
    </div>
  )
}

export default MoreList;