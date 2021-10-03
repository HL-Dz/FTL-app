import React, { FC } from 'react';
import { IArticle } from '../../../../types/articles';
import OwnerLabel from '../../../common/OwnerLabel/OwnerLabel';
import "./AdminArticle.scss";
import fireball from '../../../../assets/images/fireball.jpg';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';


interface AdminArticleProps {
  article: IArticle
  getSelectedAdminArticle: (article: IArticle) => void
  showArticlePreview: (acticle: IArticle) => void
  deleteArticle: (articleUrl: string) => void
}

const AdminArticle: FC<AdminArticleProps> = ({article, getSelectedAdminArticle, showArticlePreview, deleteArticle}) => {
  const {user} = useTypedSelector(state => state.auth);
  return (
    <div key={article.id} className="admin-article">
      {user?.uid === article.articleAuthorId ? <OwnerLabel/> : null}
      <div className="admin-article__pic">
        <img src={article.imgSrc || fireball} alt="Article" className="admin-article__img" />
      </div>
      <div className="admin-article__time">
        <div className="admin-article__delete" title="Delete article" onClick={() => deleteArticle(article.articleUrl)}>
          <i className="fas fa-minus"></i>
        </div>
        {article.createdAt}
      </div>
      <div className="admin-article__buttons">
        <div className="article-btn article-edit-btn" onClick={() => getSelectedAdminArticle(article)}>Update</div>
        <div className="article-btn article-preview-btn" onClick={() => showArticlePreview(article)}>Preview</div>
      </div>
      <div className="admin-article__title">{article.title}</div>
    </div>
  )
}

export default AdminArticle