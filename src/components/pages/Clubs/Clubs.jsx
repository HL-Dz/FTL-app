import React from 'react';
import Footer from '../../common/Footer/Footer';
import "./Clubs.scss";

const Clubs = () => {
  return (
    <div className="clubs flex-container-column">
      <div className="container">
        <h1 className="clubs__title">Saved clubs</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Clubs;