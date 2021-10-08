import React, { FC, useEffect, useState } from 'react'
import { IArticle } from '../../../../types/articles';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import AdminArticle from '../AdminArticle/AdminArticle';
import EmptyAdminList from './EmptyAdminList/EmptyAdminList';
import { deleteArticleFromServer, getArticlesFromServer, resetArticles } from '../../../../redux/articles-reducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

interface ArticlesWrapperProps {
  getSelectedAdminArticle: (article: IArticle) => void
  showArticlePreview: (article: IArticle) => void
  adminArticles: Array<IArticle> | []
}

const ArticlesWrapper:FC<ArticlesWrapperProps> = ({getSelectedAdminArticle,showArticlePreview, adminArticles}) => {
  const { isLoading } = useTypedSelector(state => state.articles);
  const [searchElem, setSearchElem] = useState('');
  const dispatch = useDispatch();
  

  const getAdminArticles = async () => {
    dispatch(getArticlesFromServer());
  }

  const deleteArticle = async (articleUrl: string) => {
    dispatch(deleteArticleFromServer(articleUrl));
  }

  useEffect(() => {
    dispatch(resetArticles())
  }, [])

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
        <button className="search-article__button">Search
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
                  deleteArticle={deleteArticle}
                />)
            )
        }
      </div>
    </div>
  )
}

export default ArticlesWrapper;