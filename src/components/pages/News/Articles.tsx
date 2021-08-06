import React, { useEffect, useState } from 'react';
import "./Articles.scss";
import Footer from '../../common/Footer/Footer';
import SignIn from '../../common/Auth/SignIn';
import firebase from '../../../firebase';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Articles = () => {  
  // const dispatch = useDispatch();
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
    <div className="primary-container news">
      <div className="container">
        {
          !user ? <SignIn/> : (
            <h1 className="news__title">{`Hello, ${userName}!`}</h1>
          )
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Articles;