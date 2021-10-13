import React, { useEffect } from 'react';
import "./Articles.scss";
import Footer from '../../common/Footer/Footer';
import SignIn from '../../common/Auth/SignIn';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Tournaments from './Tournaments/Tournaments';
import Article from './Article/Article';
import { getArticlesFromServer, resetArticles, setArticleErrorMessage, setArticleErrorModal, toggleArticleLoading } from '../../../redux/articles-reducer';
import UniversalLoader from '../../common/UniversalLoader/UniversalLoader';
import ErrorModal from '../../common/ErrorModal/ErrorModal';


const Articles = () => {  
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  const { articles, errorModal, errorMessage, isLoading } = useTypedSelector(state => state.articles);
  let userName = '';
  if(user) {
    userName = user.displayName ? user.displayName : 'user';
  }

  const getList = () => {
    dispatch(getArticlesFromServer());
  }

  const setErrorModal = (value: boolean) => {
    dispatch(setArticleErrorModal(value));
  }


  useEffect(() => {
    if(user) {
      dispatch(getArticlesFromServer());
    }

    return (() => {
      dispatch(toggleArticleLoading(false));
      dispatch(setArticleErrorMessage(""));
      dispatch(setArticleErrorMessage(""));
      dispatch(resetArticles());
    })
  }, [])


  return (
    <div className="primary-container articles scroll-container">
      {errorModal? <ErrorModal errorMessage={errorMessage} setErrorModal={setErrorModal}/> : null}
      <div className="container">
        {
          !user ? <SignIn/> : (
            <>
              <header className="articles__header">
                <h1 className="articles__title">tfl articles</h1>
              </header>
              <div className="articles__container">
                <div className={isLoading ? "articles__content articles__content_inactive" : "articles__content"}>
                  {isLoading ? (
                    <div className="app-loading">
                      <UniversalLoader/>
                    </div> ) : null
                  }
                  {
                    articles.length === 0 && !isLoading ? (
                      <div className="empty-arts__section">
                        <div className="empty-arts__text">No articles list...</div>
                        <button className="operation__button" onClick={getList}><span>Get list</span></button>
                      </div>
                    ) : null
                  }
                  <div className="articles__list">
                    {
                      articles.length === 0 ? null : 
                      articles.map(article => <Article key={article.id} {...article}/>)
                    }
                  </div>
                </div>
                <aside className="articles__sidebar">
                  <Tournaments/>
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

export default Articles;