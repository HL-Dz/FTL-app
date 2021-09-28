import React, { FC } from 'react';
import "./Art.scss";
import Comments from '../../../common/Comments/Comments';
import DisabeldComments from '../../../common/Comments/DisabeldComments/DisabeldComments';
import { IArticle } from '../../../../types/articles';
import fireball from '../../../../assets/images/fireball.jpg';


interface ArtProps {
  article: IArticle | null
  adminAccess?: boolean
  hideAdminModal?: () => void
}

const Art: FC<ArtProps> = ({article, adminAccess, hideAdminModal}) => {
  if(!article) return null;
  
  return (
    <div className="art">
      <div className="art__header">
        {
          adminAccess ? (
            <div className="art__close" title="Close" onClick={hideAdminModal}>
            <i className="fas fa-arrow-up"></i>
            </div>
          ) : null
        }
        <div className="art__pic">
          <img src={article.imgSrc || fireball} alt="Elem" className="art__img" />
        </div>
        <div className="art__title">{article.title}</div>
        <div className="art__time">{article.createdAt}</div>
        <div className="art__status">
          <i className={`fab fa-gripfire article__status article__status_${article.status}`} title={`${article.status} status`}></i>
        </div>
      </div>
      <div className="art__description">
        {article.desc}
        <div className="art__info">
          <div className="art__info-photo">
            Photo: <span>Dzmitry Hlushak</span>
          </div>
          <div className="art__info-author">Author: <span>{article.articleAuthorName}</span></div>
        </div>
      </div>
      {
        article.displayComments ? (
          <Comments
            comments={article.comments}
            adminAccess={adminAccess && true}
          />
        ) : (
          <DisabeldComments/>
        )
      }
    </div>
  )
}

export default Art;