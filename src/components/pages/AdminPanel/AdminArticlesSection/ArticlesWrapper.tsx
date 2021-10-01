import React, { FC, useState } from 'react'
import { delay } from '../../../../helpers/helpers';
import { IArticle } from '../../../../types/articles';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import articlesData from '../../News/articles-data';
import AdminArticle from '../AdminArticle/AdminArticle';
import EmptyAdminList from './EmptyAdminList/EmptyAdminList';
import firebase from '../../../../firebase';

interface ArticlesWrapperProps {
  getSelectedAdminArticle: (article: IArticle) => void
  showArticlePreview: (article: IArticle) => void
  adminArticles: Array<IArticle> | []
  setAdminArticles: any
}

const ref = firebase.firestore().collection('articles');

const ArticlesWrapper:FC<ArticlesWrapperProps> = ({getSelectedAdminArticle,showArticlePreview, adminArticles, setAdminArticles}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchElem, setSearchElem] = useState('');

  // const [adminArticles, setAdminArticles] = useState<Array<IArticle> | []>([]);

  const getTempArticles = async () => {
    setIsLoading(true);
    await delay(1000);
    setIsLoading(false);
    setSearchElem('')
  }

  const getAdminArticles = async () => {
    setIsLoading(true);
    await delay(700);
    ref.get().then(item => {
      let articles = item.docs.map((doc:any) => doc.data());
      setAdminArticles(articles);
    })
    await delay(500);
    setIsLoading(false);
  }

  return (
    <div className="articles-wrapper">
      {
      isLoading ? 
        <div className="app-loading">
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
          adminArticles.length === 0 ? 
            <EmptyAdminList getAdminArticles={getAdminArticles}/> : (
              adminArticles.map(article => 
                <AdminArticle
                  key={article.id}
                  article={article}
                  getSelectedAdminArticle={getSelectedAdminArticle}
                  showArticlePreview={showArticlePreview}
                />)
            )
        }
      </div>
    </div>
  )
}

export default ArticlesWrapper;