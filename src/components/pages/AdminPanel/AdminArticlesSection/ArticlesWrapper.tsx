import React, { FC, useState } from 'react'
import { delay } from '../../../../helpers/helpers';
import { IArticle } from '../../../../types/articles';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import articlesData from '../../News/articles-data';
import AdminArticle from '../AdminArticle/AdminArticle';
import EmptyAdminList from './EmptyAdminList/EmptyAdminList';
import firebase from '../../../../firebase';
import ErrorModal from '../../../common/ErrorModal/ErrorModal';

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
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getTempArticles = async () => {
    setIsLoading(true);
    await delay(1000);
    setIsLoading(false);
    setSearchElem('')
  }

  const getAdminArticles = async () => {
    setIsLoading(true);
    await delay(300);
    ref.get()
    .then(async (item) => {
      let articles = item.docs.map((doc:any) => doc.data());
      setAdminArticles(articles);
      await delay(300);
      setIsLoading(false);
    })
    .catch(async (err: any) => {
      setErrorModal(true);
      setErrorMessage(err.message)
      await delay(500);
      setIsLoading(false);
    })
  }

  const deleteArticle = async (articleUrl: string) => {
    setIsLoading(true);
    await delay(300);
    ref
    .doc(articleUrl)
    .delete()
    .then(async () => {
      let newArr = adminArticles.filter((elem:IArticle) => elem.articleUrl !== articleUrl);
      setAdminArticles(newArr);
      await delay(300);
      setIsLoading(false);
    })
    .catch(async (err: any) => {
      setErrorModal(true);
      if(err.code === 'permission-denied') {
        setErrorMessage("You can't delete articles. No access.")
      } else {
        setErrorMessage(err.message)
      }
      await delay(300);
      setIsLoading(false);
    })
  }

  return (
    <div className="articles-wrapper">
      {errorModal ? <ErrorModal errorMessage={errorMessage} setErrorModal={setErrorModal}/> : null}
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
                  deleteArticle={deleteArticle}
                />)
            )
        }
      </div>
    </div>
  )
}

export default ArticlesWrapper;