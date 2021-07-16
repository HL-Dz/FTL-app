import React, { useEffect } from 'react';
import "./News.scss";
import Footer from '../../common/Footer/Footer';
import SignIn from '../../common/Auth/SignIn';
import firebase from '../../../firebase';
import { useDispatch, useSelector } from 'react-redux';

const News = () => {
  // const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
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

export default News;