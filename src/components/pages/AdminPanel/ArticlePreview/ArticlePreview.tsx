import React, { FC, useEffect, useState } from 'react';
import { IArticle } from '../../../../types/articles';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import Art from '../../CurrentArticle/Art/Art';
import "./ArticlePreview.scss";
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import firebase from '../../../../firebase'
import { delay } from '../../../../helpers/helpers';

interface ArticlePreviewProps {
  article: IArticle | null
  hideAdminModal?: () => void
}

const ref = firebase.firestore().collection('articles');

const ArticlePreview: FC<ArticlePreviewProps> = ({article, hideAdminModal}) => {
  const {user} = useTypedSelector(state=> state.auth);
  const [articlePreview, setArticlePreview] = useState<IArticle | null>(null);
  const [articlePreviewLoading, setArticlePreviewLoading] = useState(false);
  const [isNotExistArticle, setIsNotExistArticle] = useState(false);
  const [articlePreviewError, setArticlePreviewError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  let unsubscribe = () => {};
  
   const getArticlePreview = async () => {
    setArticlePreview(null);
    setArticlePreviewError(false);
    setIsNotExistArticle(false);
    setErrorMessage('');
    setArticlePreviewLoading(true);
    await delay(700);
    unsubscribe = ref
    .doc(article?.articleUrl)
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

  useEffect(() => {
    if(user) {
      getArticlePreview();
    }

    return () => {
      unsubscribe();
    }
  }, [])
  
  return (
    <div className={articlePreviewLoading ? "preview preview_load" : "preview"}>
      {isNotExistArticle ? 
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