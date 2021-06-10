import React, {useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../common/Footer/Footer';
import "./Clubs.scss";
import SearchElem from '../../common/SearchElem/SearchElem';
import SavedClub from './SavedClub/SavedClub';
import NoClubsInfo from './NoClubs/NoClubsInfo';
import ClubContent from './ClubContent/ClubContent';

const Clubs = () => {
  const clubs = useSelector(state => state.clubsPage.clubs);
  const inActiveItem = useSelector(state => state.clubsPage.inActiveItem);
  const [search, setSearch] = useState('');

  const filteredClubs = clubs.filter(elem => {
    return elem.name.toLowerCase().includes(search.toLowerCase());
  });

  const sortClubs = (a,b) => {
    if(a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  }

  return (
    <div className="clubs flex-container-column">
      <div className="container">
        {
         !clubs.length ? <NoClubsInfo/> : 
          <div className="clubs-wrapper">
            <aside className="sidebar-club">
              <div className="search-club">
                SEARCH CLUB
                <SearchElem search={search} setSearch={setSearch}/>
              </div>
              {filteredClubs.length === 0 ? <div className="td-no-matches">No clubs...</div> :  
                filteredClubs.sort(sortClubs).map(elem => {
                return (
                  <SavedClub
                    key={elem.id}
                    elem={elem}
                    inActiveItem={inActiveItem}
                  />
                )
              })}
            </aside>
            <ClubContent />
          </div>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Clubs;