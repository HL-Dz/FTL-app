import React, { FC, useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import SignIn from '../../common/Auth/SignIn';
import Footer from '../../common/Footer/Footer';
import Tournaments from '../News/Tournaments/Tournaments';
import Art from './Art/Art';
import "./CurrentArticle.scss";
import UniversalLoader from '../../common/UniversalLoader/UniversalLoader';
import firebase from '../../../firebase';
import { IArticle } from '../../../types/articles';
import { delay } from '../../../helpers/helpers';


interface CurrentArticleParams {
  url: string
}

const ref = firebase.firestore().collection('articles');

const CurrentArticle = () => {
  const { user } = useTypedSelector(state => state.auth);
  const [articlePreview, setArticlePreview] = useState<IArticle | null>(null);
  const [articlePreviewLoading, setArticlePreviewLoading] = useState(false);
  const [isNotExistArticle, setIsNotExistArticle] = useState(false);
  const [articlePreviewError, setArticlePreviewError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { url } = useParams<CurrentArticleParams>();

  let unsubscribe = () => {};

  const getUserArticle = async () => {
  setArticlePreview(null);
  setArticlePreviewError(false);
  setIsNotExistArticle(false);
  setErrorMessage('');
  setArticlePreviewLoading(true);
  await delay(700);
  unsubscribe = ref
  .doc(url)
  .onSnapshot((doc:firebase.firestore.DocumentData) => {
      if(doc.exists === true) {
        setArticlePreviewLoading(false);
        setArticlePreviewError(false);
        setArticlePreview(doc.data())
      } else {
        setArticlePreviewLoading(false);
        setIsNotExistArticle(true);
        setErrorMessage('No such document exists...');
        setArticlePreview(null);
      }
    },
    (error) => {
      setArticlePreviewLoading(false);
      setArticlePreviewError(true)
      setErrorMessage(error.message);
      setArticlePreview(null);
    }
    )
  }

  const reloadPage = () => {
    getUserArticle()
  }
  
  useEffect(() => {
    if(user) {
      getUserArticle();
    }
    return (() => {
      setArticlePreview(null);
      unsubscribe();
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
                <h1 className="articles__title">tfl article</h1>
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