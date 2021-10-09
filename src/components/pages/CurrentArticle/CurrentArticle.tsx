import React, { FC, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import SignIn from '../../common/Auth/SignIn';
import Footer from '../../common/Footer/Footer';
import Tournaments from '../News/Tournaments/Tournaments';
import Art from './Art/Art';
import "./CurrentArticle.scss";
import { getArticleFromServer, resetArticlePreview } from '../../../redux/articles-reducer';
import UniversalLoader from '../../common/UniversalLoader/UniversalLoader';


interface CurrentArticleParams {
  url: string
}


const CurrentArticle = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  const {
    articlePreview,
    articlePreviewLoading,
    isNotExistArticle,
    articlePreviewError,
    errorMessage
  } = useTypedSelector(state => state.articles)
  const { url } = useParams<CurrentArticleParams>();

  const getUserArticle = () => {
    dispatch(getArticleFromServer(url))
  }

  const reloadPage = () => {
    dispatch(getArticleFromServer(url))
  }
  
  useEffect(() => {
    if(user) {
      getUserArticle();
    }
    return (() => {
      dispatch(resetArticlePreview());
    })
  }, [])
  
  
  return (
    <div className="primary-container articles scroll-container">
      <div className="container">
        {
          !user ? <SignIn/> : (
            <>
              {
              articlePreviewLoading ? 
                <div className="app-loading">
                  <UniversalLoader/>
                </div> : null
              }
              <header className="articles__header">
                <h1 className="articles__title">tfl articles</h1>
              </header>
              <div className="articles__container">
                <div className="articles__content">
                  {isNotExistArticle && !articlePreviewError && !articlePreviewLoading ? 
                    <div className="empty-article"><span>{errorMessage}</span></div>
                    : null
                  }
                  {
                    articlePreviewError ? 
                    <div className="empty-arts__section">
                      <div className="empty-article">
                        <span>{errorMessage}</span>
                      </div>
                      <button className="operation__button" onClick={reloadPage}><span>Reload page</span></button>
                    </div> : null
                  }
                  {!articlePreview && !articlePreviewError && !articlePreviewLoading ? 
                  <div className="empty-arts__section">
                    <button className="operation__button" onClick={reloadPage}><span>Reload article</span></button>
                  </div>
                  : <Art article={articlePreview}/>}
                </div>
                <aside className="articles__sidebar">
                  <Tournaments disTournament/>
                </aside>
              </div>
            </>
          )
        }
      </div>
      <Footer/>
    </div>
  )
}

export default CurrentArticle;