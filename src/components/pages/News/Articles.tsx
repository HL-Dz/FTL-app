import React, { useEffect } from 'react';
import "./Articles.scss";
import Footer from '../../common/Footer/Footer';
import SignIn from '../../common/Auth/SignIn';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Tournaments from './Tournaments/Tournaments';
import Article from './Article/Article';
import { getArticlesFromServer, getMoreArticles, resetArticles, setArticleErrorMessage, setArticleErrorModal, toggleArticleLoading } from '../../../redux/articles-reducer';
import UniversalLoader from '../../common/UniversalLoader/UniversalLoader';
import ErrorModal from '../../common/ErrorModal/ErrorModal';
import MoreList from '../../common/MoreList/MoreList';


const Articles = () => {  
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  const { articles, errorModal, errorMessage, isLoading, lastArticle } = useTypedSelector(state => state.articles);

  const getList = () => {
    dispatch(getArticlesFromServer());
  }

  const setErrorModal = (value: boolean) => {
    dispatch(setArticleErrorModal(value));
  }

  const showMoreArticles = () => {
    dispatch(getMoreArticles(lastArticle));
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
  }, [user])


  return (
    <div className="primary-container articles scroll-container articles_prim">
      {errorModal? <ErrorModal errorMessage={errorMessage} setErrorModal={setErrorModal}/> : null}
      <div className="container">
        {
          !user ? <SignIn/> : (
            <>
              {
              isLoading ? 
                <div className="app-loading">
                  <UniversalLoader/>
                </div> : null
              }
              <header className="articles__header">
                <h1 className="articles__title">TFL ARTICLES</h1>
              </header>
              <div className="articles__container">
                <div className={isLoading ? "articles__content articles__content_inactive" : "articles__content"}>
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
                  {
                    articles.length !== 0 && <MoreList showMoreList={showMoreArticles}/>
                  }
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