import React, { FC } from 'react';
import "./EmptyAdminList.scss";


interface EmptyAdminListProps {
  getAdminArticles?: () => void 
}

const EmptyAdminList: FC<EmptyAdminListProps> = ({getAdminArticles}) => {
  return (
    <div className="empty-list">
      <div className="empty-list__wrap">
        <div className="epmpty-list__text ">No articles list...</div>
        <button className="empty-list__button operation__button" onClick={getAdminArticles}>
          <span>Get list</span>
        </button>
      </div>
    </div>
  )
}

export default EmptyAdminList;