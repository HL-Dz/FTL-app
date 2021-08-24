import React, { FC } from 'react';
import { IArticle } from '../../../../types/articles';
import "./Article.scss";
import noArticleImg from  '../../../../assets/images/noArticleImg.jpg';
import { NavLink } from 'react-router-dom';



const Article: FC<IArticle> = ({...article}) => {
  return (
    <div key={article.id} className="article">
      <NavLink className="article__link" to={`/articles/${article.id}`}>
        <div className="article__pic" style={{backgroundImage: `url(${article.imgSrc || noArticleImg})`}}>
          <div className="article__time">{article.createdAt}</div>
        </div>
        <div className="article__info">
          <div className="article__title">
            {article.title}
            <i className={`fab fa-gripfire article__status article__status_${article.status}`} title={`${article.status} status`}></i>
          </div>
          <div className="article__details">
            {article.shortDesc}
            <div className="article__comments">
              <div className="article__comments-count">{article.comments.length}</div>
              <i className="far fa-comment-alt article__comments_icon"></i>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Article;