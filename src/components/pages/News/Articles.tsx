import React, { useEffect, useState } from 'react';
import "./Articles.scss";
import Footer from '../../common/Footer/Footer';
import SignIn from '../../common/Auth/SignIn';
import firebase from '../../../firebase';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Tournaments from './Tournaments/Tournaments';
import Article from './Article/Article';
import articlesData from './articles-data';


const Articles = () => {  
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  let userName = '';
  if(user) {
    userName = user.displayName ? user.displayName : 'user';
  }

    // let adminsRef = firebase.firestore().collection("admins").doc('current-admins');
    // adminsRef.update({
    //   users: firebase.firestore.FieldValue.arrayUnion({
    //     name: 'Alina',
    //     surname: 'Trebnikabva',
    //     age: 23,
    //     isAdmin: true,
    //     uid: '434343543-5e452345v45f486776-43'
    //   })
    // }).then(() => {
    //   console.log('Success!!!');
    // }).catch((err) => {
    //   console.log(err);
    // });

  // const newsRef = firebase.firestore().collection("articles");
  // const admins = firebase.firestore().collection("admins");
  // admins.doc('current-admins').update({
  //   users: firebase.firestore.FieldValue.arrayUnion({
  //     name: 'dzmitry',
  //     surname: 'Hlushak',
  //     isAdmin: true,
  //     uid: '454254679254vbireu6543f75f45-4f5463g54'
  //   })
  // })

  // const getNews = () => {
  //   newsRef
  //     .onSnapshot((querySnapshot) => {
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push(doc.data())
  //       })
  //     }, (err) => {
  //       console.log(err);
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
                <h1 className="articles__title">tfl articles</h1>
              </header>
              <div className="articles__container">
                <div className="articles__content">
                  <div className="articles__list">
                    {
                      articlesData.map(article => <Article key={article.id} {...article}/>)
                    }
                  </div>
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