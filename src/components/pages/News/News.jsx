import React from 'react';
import "./News.scss";
import Footer from '../../common/Footer/Footer';
import SignIn from '../../common/Auth/SignIn';

const News = () => {
  const isAuth = false;
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