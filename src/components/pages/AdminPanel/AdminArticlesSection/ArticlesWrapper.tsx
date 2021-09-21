import React, { FC, useState } from 'react'
import { delay } from '../../../../helpers/helpers';
import { IArticle } from '../../../../types/articles';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import articlesData from '../../News/articles-data';
import AdminArticle from '../AdminArticle/AdminArticle';

interface ArticlesWrapperProps {
  getSelectedAdminArticle: (article: IArticle) => void
  showArticlePreview: (article: IArticle) => void
}

const ArticlesWrapper:FC<ArticlesWrapperProps> = ({getSelectedAdminArticle,showArticlePreview}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchElem, setSearchElem] = useState('');

  const getTempArticles = async () => {
    setIsLoading(true);
    await delay(1000);
    setIsLoading(false);
    setSearchElem('')
  }

  return (
    <div className="articles-wrapper">
      {
      isLoading ? 
        <div className="admin-loading">
          <UniversalLoader/>
        </div> : null
      }
      <div className="search-article">
        <input
          value={searchElem}
          type="text"
          className="search-article__input"
          placeholder="Search article (type the article URL)..."
          onChange={(e) => setSearchElem(e.target.value)}
          autoFocus
        />
        <button className="search-article__button" onClick={getTempArticles}>Search
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="articles-list">
        {
          articlesData.map(article => 
            <AdminArticle
              key={article.id}
              article={article}
              getSelectedAdminArticle={getSelectedAdminArticle}
              showArticlePreview={showArticlePreview}
            />)
        }
      </div>
    </div>
  )
}

export default ArticlesWrapper;