import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import SignIn from '../../common/Auth/SignIn';
import Footer from '../../common/Footer/Footer';
import Tournaments from '../News/Tournaments/Tournaments';
import Art from './Art/Art';
import "./CurrentArticle.scss";

interface CurrentArticleParams {
  id: string
}


const CurrentArticle: FC = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  const { id } = useParams<CurrentArticleParams>();
  
  
  return (
    <div className="primary-container articles">
      <div className="container">
        {
          !user ? <SignIn/> : (
            <>
              <header className="articles__header">
                <h1 className="articles__title">football articles</h1>
              </header>
              <div className="articles__container">
                <div className="articles__content">
                  <Art/>
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