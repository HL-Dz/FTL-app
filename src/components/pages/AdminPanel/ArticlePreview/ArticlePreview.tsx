import React, { FC, useEffect, useState } from 'react';
import { IArticle } from '../../../../types/articles';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import Art from '../../CurrentArticle/Art/Art';
import "./ArticlePreview.scss";
import firebase from '../../../../firebase';
import { delay } from '../../../../helpers/helpers';

interface ArticlePreviewProps {
  article: IArticle | null
  hideAdminModal?: () => void
}


const ArticlePreview: FC<ArticlePreviewProps> = ({article, hideAdminModal}) => {
  const ref = firebase.firestore().collection('articles').doc(article?.articleUrl);
  const [articlePreview, setArticlePreview] = useState<any>(null);
  const [isLoadingArticle, setIsLoadingArticle] = useState(false);

  const [isExist, setIsExist] = useState(true);
  const [error, setError] = useState(false);
  const [errMessage, setErrorMessage] = useState('');

  let unsubscribe: any;

  
   async function getArticlePreview (){
    setIsExist(true);
    setError(false);
    setErrorMessage('')
    setIsLoadingArticle(true);
    await delay(1000);
    if(article) {
      ref.get()
          .then((docSnapshot) => {
            if(docSnapshot.exists) {
              ref
              .onSnapshot((doc) => {
                  setArticlePreview(doc.data());
                  setIsLoadingArticle(false);
                },
                (error) => {
                  setIsLoadingArticle(false);
                  setError(true);
                  setErrorMessage(error.message);
                }
              )
            } else {
              setIsLoadingArticle(false);
              setIsExist(false);
              setErrorMessage('No such document exists...');
            }
          })
          .catch(error => {
            setIsLoadingArticle(false);
            setError(true);
            setErrorMessage(error.message);
          })
    }
  }


  
  useEffect(() => {
    if(article) {
      getArticlePreview();
    }

    return unsubscribe;
  }, [])
  
  return (
    <div className={isLoadingArticle ? "preview preview_load" : "preview"}>
      {!isExist ? 
        <div className="empty-article"><span>{errMessage}</span></div>
         : null
      }
      {error ? 
        <div className="empty-article"><span>{errMessage}</span></div>
         : null
      }
      {isLoadingArticle ? (
        <div className="app-loading">
          <UniversalLoader/>
        </div> ) : null
      }
      {!error && <Art 
        article={articlePreview}
        adminAccess
        hideAdminModal={hideAdminModal}
      />}
    </div>
  )
}

export default ArticlePreview;