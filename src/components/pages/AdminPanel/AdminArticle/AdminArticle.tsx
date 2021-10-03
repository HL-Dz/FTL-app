import React, { FC, useState } from 'react';
import { IArticle } from '../../../../types/articles';
import OwnerLabel from '../../../common/OwnerLabel/OwnerLabel';
import "./AdminArticle.scss";
import fireball from '../../../../assets/images/fireball.jpg';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';


interface AdminArticleProps {
  article: IArticle
  getSelectedAdminArticle: (article: IArticle) => void
  showArticlePreview: (acticle: IArticle) => void
  deleteArticle: (articleUrl: string) => void
}

const AdminArticle: FC<AdminArticleProps> = ({article, getSelectedAdminArticle, showArticlePreview, deleteArticle}) => {
  const {user} = useTypedSelector(state => state.auth);
  const [imageLoaded, setImageLoaded] = useState(true);
  const onImageLoaded = () => {
    setImageLoaded(false)
  }
  return (
    <div key={article.id} className="admin-article">
      {imageLoaded ? <div className="admin-article__load"><UniversalLoader/></div> : null}
      {user?.uid === article.articleAuthorId ? <OwnerLabel/> : null}
      <div className="admin-article__pic">
        <img src={article.imgSrc || fireball} onLoad={onImageLoaded} alt="Article" className="admin-article__img" />
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