import React, { useEffect } from 'react';
import "./Articles.scss";
import Footer from '../../common/Footer/Footer';
import SignIn from '../../common/Auth/SignIn';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Tournaments from './Tournaments/Tournaments';
import Article from './Article/Article';
import { getArticlesFromServer, setArticleErrorModal } from '../../../redux/articles-reducer';
import UniversalLoader from '../../common/UniversalLoader/UniversalLoader';
import ErrorModal from '../../common/ErrorModal/ErrorModal';


const Articles = () => {  
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  const { articles, errorModal, errorMessage, isLoading } = useTypedSelector(state => state.articles);
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

  const getList = () => {
    dispatch(getArticlesFromServer());
  }

  const setErrorModal = (value: boolean) => {
    dispatch(setArticleErrorModal(value));
  }


  useEffect(() => {
    if(user) {
      dispatch(getArticlesFromServer());
    }
  }, [])


  return (
    <div className="primary-container articles scroll-container">
      {errorModal? <ErrorModal errorMessage={errorMessage} setErrorModal={setErrorModal}/> : null}
      <div className="container">
        {
          !user ? <SignIn/> : (
            <>
              <header className="articles__header">
                <h1 className="articles__title">tfl articles</h1>
              </header>
              <div className="articles__container">
                <div className={isLoading ? "articles__content articles__content_inactive" : "articles__content"}>
                  {isLoading ? (
                    <div className="app-loading">
                      <UniversalLoader/>
                    </div> ) : null
                  }
                  {
                    articles.length === 0 && !isLoading ? (
                      <div className="empty-arts__section">
                        <div className="empty-arts__text">No articles list...</div>
                        <button className="operation__button" onClick={getList}><span>Get list</span></button>
                      </div>
                    ) : null
                  }
                  <div className="articles__list">
                    {
                      articles.length === 0 ? null : 
                      articles.map(article => <Article key={article.id} {...article}/>)
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