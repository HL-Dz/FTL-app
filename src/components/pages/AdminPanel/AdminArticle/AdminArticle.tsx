import React, { FC } from 'react';
import { IArticle } from '../../../../types/articles';
import OwnerLabel from '../../../common/OwnerLabel/OwnerLabel';
import "./AdminArticle.scss";
import fireball from '../../../../assets/images/fireball.jpg';


interface AdminArticleProps {
  article: IArticle
  getSelectedAdminArticle: (article: IArticle) => void
  showArticlePreview: (acticle: IArticle) => void
}

const AdminArticle: FC<AdminArticleProps> = ({article, getSelectedAdminArticle, showArticlePreview}) => {
  return (
    <div key={article.id} className="admin-article">
      <OwnerLabel/>
      <div className="admin-article__pic">
        <img src={article.imgSrc || fireball} alt="Article" className="admin-article__img" />
      </div>
      <div className="admin-article__time">{article.createdAt}</div>
      <div className="admin-article__buttons">
        <div className="article-btn article-edit-btn" onClick={() => getSelectedAdminArticle(article)}>Edit</div>
        <div className="article-btn article-preview-btn" onClick={() => showArticlePreview(article)}>Preview</div>
      </div>
      <div className="admin-article__title">{article.title}</div>
    </div>
  )
}

export default AdminArticle