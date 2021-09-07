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
import firebase from '../../../firebase';
import { IArticle } from '../../../types/articles';

interface CurrentArticleParams {
  id: string
}


const CurrentArticle: FC = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  const { id } = useParams<CurrentArticleParams>();
  const [article, setArticle] = useState<IArticle | null>(null);

  const ref = firebase.firestore().collection('articles').doc('fZGoUeMHbbdic0vxw7TM');
  let unsbscribe: () => void;
  
  const getCurrentArticeData  = () => {
    unsbscribe =  ref.onSnapshot((doc:any) => {
      setArticle(doc.data())
    })
  }
  
  useEffect(() => {
    if(user) {
      getCurrentArticeData()
    }
    return unsbscribe;
  }, [])
  
  
  return (
    <div className="primary-container articles">
      <div className="container">
        {
          !user ? <SignIn/> : (
            <>
              <header className="articles__header">
                <h1 className="articles__title">tfl articles</h1>
              </header>
              <div className="articles__container">
                <div className="articles__content">
                  <Art article={article}/>
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