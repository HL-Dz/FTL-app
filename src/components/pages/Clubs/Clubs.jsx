import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../common/Footer/Footer';
import "./Clubs.scss";
import noPhoto from '../../../images/no-image.png';
import {removeSavedClub} from '../../../redux/clubs-reducer';
import SearchElem from '../../common/SearchElem/SearchElem';

const Clubs = () => {
  const clubs = useSelector(state => state.clubsPage.clubs);
  const inActiveItem = useSelector(state => state.clubsPage.inActiveItem);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  

  const removeClub = (id) => {
    dispatch(removeSavedClub(id));
  }

  const filteredClubs = clubs.filter(elem => {
    return elem.name.toLowerCase().includes(search.toLowerCase());
  });


  return (
    <div className="clubs flex-container-column">
      <div className="container">
        {
         !clubs.length ? <div>Please, save clubs to view information.</div> : 
          <div className="clubs-wrapper">
            <aside className="sidebar-club">
              <div className="search-club">
                SEARCH CLUB
                <SearchElem search={search} setSearch={setSearch}/>
              </div>
              { filteredClubs.length === 0 ? <div className="td-no-matches">No clubs...</div> :  
                filteredClubs.map(elem => {
                return (
                  <div key={elem.id} className={`${elem.cls} ${elem.id === inActiveItem ? "current-club_inactive" : ""}`}>
                    <div className="club-pic">
                      <img className="club-img" src={elem.crestUrl || noPhoto} alt={elem.name} title={elem.name}/>
                    </div>
                    <div className="club-name">{elem.name}</div>
                    <div className={"club-remove"} title="Remove club" onClick={() => {removeClub(elem.id)}}>
                      <div className="remove-icon">
                        <i className="fas fa-minus"></i>
                      </div>
                    </div>
                  </div>
                )
              })}
            </aside>
            <div className="club-content">
              Content
            </div>
          </div>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Clubs;