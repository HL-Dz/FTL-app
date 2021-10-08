import React, { FC, useEffect } from 'react';
import { IArticle } from '../../../../types/articles';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import Art from '../../CurrentArticle/Art/Art';
import "./ArticlePreview.scss";
import { useDispatch } from 'react-redux';
import { getArticleFromServer } from '../../../../redux/articles-reducer';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

interface ArticlePreviewProps {
  article: IArticle | null
  hideAdminModal?: () => void
}


const ArticlePreview: FC<ArticlePreviewProps> = ({article, hideAdminModal}) => {
  const dispatch = useDispatch();
  const { articlePreview, articlePreviewLoading, isExistArticle, articlePreviewError, errorMessage } = useTypedSelector(state => state.articles)

  
   const getArticlePreview = async () => {
     if(article) {
      dispatch(getArticleFromServer(article));
     }
  }


  
  useEffect(() => {
    if(article) {
      getArticlePreview();
    }
  }, [])
  
  return (
    <div className={articlePreviewLoading ? "preview preview_load" : "preview"}>
      {!isExistArticle ? 
        <div className="empty-article"><span>{errorMessage}</span></div>
         : null
      }
      {articlePreviewError ? 
        <div className="empty-article"><span>{errorMessage}</span></div>
         : null
      }
      {articlePreviewLoading ? (
        <div className="app-loading">
          <UniversalLoader/>
        </div> ) : null
      }
      {!articlePreviewError && <Art 
        article={articlePreview}
        adminAccess
        hideAdminModal={hideAdminModal}
      />}
    </div>
  )
}

export default ArticlePreview;