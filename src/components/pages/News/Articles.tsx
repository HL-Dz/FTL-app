import React, { useEffect, useState } from 'react';
import "./Articles.scss";
import Footer from '../../common/Footer/Footer';
import SignIn from '../../common/Auth/SignIn';
import firebase from '../../../firebase';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Tournaments from './Tournaments/Tournaments';


const Articles = () => {  
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  let userName = '';
  if(user) {
    userName = user.displayName ? user.displayName : 'user';
  }

  // const newsRef = firebase.firestore().collection("news");

  // const getNews = () => {
  //   newsRef
  //     .onSnapshot((querySnapshot) => {
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push(doc.data())
  //       })
  //     })
  // }

  // useEffect(() => {
  //   getNews();
  // }, [])



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
                  Content
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