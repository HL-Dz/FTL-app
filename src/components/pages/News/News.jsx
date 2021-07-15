import React, { useEffect } from 'react';
import "./News.scss";
import Footer from '../../common/Footer/Footer';
import SignIn from '../../common/Auth/SignIn';
import firebase from '../../../firebase';

const News = () => {
  const isAuth = false;

  const newsRef = firebase.firestore().collection("news");

  const getNews = () => {
    newsRef
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data())
        })
      })
  }

  useEffect(() => {
    getNews();
  }, [])


  return (
    <div className="primary-container news">
      <div className="container">
        {
          !isAuth ? <SignIn/> : (
            <h1 className="news__title">News</h1>
          )
        }
      </div>
      <Footer/>
    </div>
  )
}

export default News;