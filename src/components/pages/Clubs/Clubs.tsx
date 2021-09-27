import React, {useState, FC } from 'react';
import Footer from '../../common/Footer/Footer';
import "./Clubs.scss";
import SearchElem from '../../common/SearchElem/SearchElem';
import SavedClub from './SavedClub/SavedClub';
import NoClubsInfo from './NoClubs/NoClubsInfo';
import ClubContent from './ClubContent/ClubContent';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IClub } from '../../../types/clubs';

const Clubs: FC = () => {
  const [search, setSearch] = useState('');
  const { clubs, inActiveItem } = useTypedSelector(state => state.clubsPage)

  const filteredClubs = clubs.filter((elem: IClub) => {
    return elem.name?.toLowerCase().includes(search.toLowerCase());
  });

  const sortClubs = (a: IClub, b: IClub) => {
    if(a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  }

  return (
    <div className="primary-container clubs scroll-container">
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
            <ClubContent/>
          </div>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Clubs;