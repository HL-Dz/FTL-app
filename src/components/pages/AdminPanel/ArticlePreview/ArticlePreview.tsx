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

  let unsubscribe: () => void;
  
  const getArticlePreview = async () => {
    setIsExist(true);
    setIsLoadingArticle(true);
    await delay(1000);
    if(article) {
        ref.get()
          .then((docSnapshot) => {
            if(docSnapshot.exists) {
              unsubscribe =  ref
              .onSnapshot((doc) => {
                  setArticlePreview(doc.data());
                  setIsLoadingArticle(false);
                },
                (err) => {
                  setIsLoadingArticle(false);
                  console.log(err);
                }
              )
            } else {
              setIsLoadingArticle(false);
              setIsExist(false);
            }
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
        <div className="empty-article"><span>No such document exists...</span></div>
         : null
      }
      {isLoadingArticle ? (
        <div className="app-loading">
          <UniversalLoader/>
        </div> ) : null
      }
      <Art 
        article={articlePreview}
        adminAccess
        hideAdminModal={hideAdminModal}
      />
    </div>
  )
}

export default ArticlePreview;