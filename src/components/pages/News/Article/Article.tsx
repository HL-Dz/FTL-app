import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { IArticle } from '../../../../types/articles';
import "./Article.scss";
import { delay } from '../../../../helpers/helpers';
import tfl from '../../../../assets/images/tfl.jpg';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';



const Article: FC<IArticle | null> = ({...article}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isSlowlyHide, setIsSlowlyHide] = useState(false);

  const setImageError = async (e: React.SyntheticEvent) => {
    let target = e.target as HTMLImageElement;
    target.src = tfl;
    await delay(700);
  }

  const onImageLoaded = async () => {
    setIsSlowlyHide(true);
    await delay(490);
    setImageLoaded(true);
    setIsSlowlyHide(false);
  }

  return (
    <div key={article.id} className="article">
      <Link className="article__link" to={{
        pathname: `/articles/${article.articleUrl}`
      }}>
        <div className="article__pic">
          {!imageLoaded ?
            <div className={isSlowlyHide ? "article__load article__load_hide" : "article__load"}>
              <UniversalLoader/>
            </div> : null
          }
          <img src={article.imgSrc} alt="Article" onError={setImageError} onLoad={onImageLoaded}/>
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
      </Link>
    </div>
  )
}

export default Article;