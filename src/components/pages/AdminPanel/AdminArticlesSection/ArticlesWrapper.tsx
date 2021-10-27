import React, { FC, useEffect, useState } from 'react'
import { IArticle } from '../../../../types/articles';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import AdminArticle from '../AdminArticle/AdminArticle';
import EmptyAdminList from './EmptyAdminList/EmptyAdminList';
import { deleteArticleFromServer, getArticlesFromServer, getMoreArticles, resetArticles, resetSearchedArticle, searchAdminArticle, setIsSearchModal } from '../../../../redux/articles-reducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { delay } from '../../../../helpers/helpers';
import SearchModal from '../../../common/SearchModal/SearchModal';
import MoreList from '../../../common/MoreList/MoreList';

interface ArticlesWrapperProps {
  getSelectedAdminArticle: (article: IArticle) => void
  showArticlePreview: (article: IArticle) => void
  adminArticles: Array<IArticle> | []
}

const ArticlesWrapper:FC<ArticlesWrapperProps> = ({getSelectedAdminArticle,showArticlePreview, adminArticles}) => {
  const { isLoading, searchedArticle, lastArticle, isSearchModal} = useTypedSelector(state => state.articles);
  const [searchElem, setSearchElem] = useState('');
  const dispatch = useDispatch();
  const [isFadeOutModal, setIsFadeOutModal] = useState(false);


  const hideSearchModal = async () => {
    setIsFadeOutModal(true);
    await delay(350);
    setIsFadeOutModal(false);
    dispatch(setIsSearchModal(false));
    dispatch(resetSearchedArticle());
  }
  

  const getAdminArticles = async () => {
    dispatch(getArticlesFromServer());
  }

  const deleteArticle = async (articleUrl: string) => {
    dispatch(deleteArticleFromServer(articleUrl, hideSearchModal));
  }

  const searchArticle = async () => {
    let query = searchElem.trim();
    if(query) {
      let result = query.replace(/[/\\]/gi, '-');
      await dispatch(searchAdminArticle(result));
      setSearchElem('');
    }
  }

  const showMoreArticles = () => {
    dispatch(getMoreArticles(lastArticle));
  }

  useEffect(() => {
    return() => {
      // dispatch(resetArticles());
      dispatch(dispatch(setIsSearchModal(false)));
    }
  }, [])

  return (
    <div className="articles-wrapper">
      {
       (searchedArticle && isSearchModal) ?  (
         <SearchModal isFadeOutModal={isFadeOutModal} hideSearchModal={hideSearchModal}>
           <AdminArticle
              key={searchedArticle.id}
              article={searchedArticle}
              getSelectedAdminArticle={getSelectedAdminArticle}
              showArticlePreview={showArticlePreview}
              deleteArticle={deleteArticle}
            />
         </SearchModal>
       ) : null
      }
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
        <button className="search-article__button" onClick={searchArticle}>Search
          <i className="fas fa-search"></i>
        </button>
        <div className="search-article__section">

        </div>
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
      {
        adminArticles.length !== 0 && <MoreList showMoreList={showMoreArticles}/>
      }
    </div>
  )
}

export default ArticlesWrapper;