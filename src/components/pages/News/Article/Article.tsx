import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IArticle } from '../../../../types/articles';
import "./Article.scss";
import { delay } from '../../../../helpers/helpers';
import tfl from '../../../../assets/images/tfl.jpg';



const Article: FC<IArticle | null> = ({...article}) => {
  // if(!article) return null;
  const setImageError = async (e: React.SyntheticEvent) => {
    let target = e.target as HTMLImageElement;
    target.src = tfl;
    await delay(700);
  }
  return (
    <div key={article.id} className="article">
      <NavLink className="article__link" to={`/articles/${article.id}`}>
        <div className="article__pic">
          <img src={article.imgSrc} alt="Article" onError={setImageError}/>
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