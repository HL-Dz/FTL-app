import React from 'react';
import { useState } from 'react';
import { delay } from '../../../../helpers/helpers';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { IMatch } from '../../../../types/player';
import Modal from '../../../common/Modal/Modal';
import Match from './Match/Match';
import MatchDetails from './MatchDetails/MatchDetails';
import "./Matches.scss";

const Matches = () => {
  const { matches, isLoadingMatches} = useTypedSelector(state => state.playerPage);
  const [isDetails, setIsDetails] = useState(false);
  const [isHideModal, setIshideModal] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<IMatch | null>(null);  

  let commpetitions: Array<string> = [];
  if(matches) {
    let allCompetitions = matches.matches.map((elem) => `${elem.competition.name}`);
    commpetitions = allCompetitions.filter((elem, index) => allCompetitions.indexOf(elem) === index);
  }  

  
  const showDetailsModal = (e: React.MouseEvent<HTMLDivElement>, match: IMatch) => {
    if(e.currentTarget.className === 'match') {
      setIsDetails(true);
      handleSelectCurrentMatch(match)
      document.body.style.overflow = "hidden";
    }
  }
  
  const hideDetailsModal = async () => {
    setIshideModal(true);
    await delay(490);
    document.body.style.overflow = "auto";
    setIshideModal(false);
    setIsDetails(false);
  }

  const handleSelectCurrentMatch = (match: IMatch) => {
    setSelectedMatch(match);
  }

  return (
    <div className="matches">
      <div className="container-width">
        {isDetails ? (
            <Modal hideDetailsModal={hideDetailsModal} isHideModal={isHideModal}>
              <MatchDetails 
                hideDetailsModal={hideDetailsModal} 
                selectedMatch={selectedMatch} 
              />
            </Modal>
          ) : null}
        <div className={isLoadingMatches ? "matches-list matches-list_inactive" : "matches-list"}>
          {!matches ? <div className="notification">Please, select a year to display player matches.</div> : null}
          <div className="competitions">
              {commpetitions.map((elem: string, index:number) => {
                  return (
                    <div className="competition" key={index}>{elem}</div>
                  )
                })
              }
          </div>
          {matches && 
            <div className={!isLoadingMatches ? "matches-desc matches-desc_active" : "matches-desc"}>
              <div>Count of matches with <span>{matches.player.name}</span> in </div> 
              <div> {matches.filters.dateFrom?.slice(0, 4)}: </div>
              <div><span className="matches-count">{matches.matches.length}</span></div>
            </div>}
          {!matches ? null : 
            matches.matches.map((match) => {
              return <Match 
                key={match.id} 
                match={match}
                showDetailsModal={showDetailsModal}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Matches;