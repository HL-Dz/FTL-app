import React, { FC } from 'react';
import "./Players.scss";

interface PlayersObjProps {
  first: IPlayerItem
  second: IPlayerItem
}

interface IPlayerItem {
  name: string
  club: string
  path: string
}

interface PlayersProps {
  isFetching: boolean
  isFetchError: boolean
  players: PlayersObjProps
}


const Players: FC<PlayersProps> = ({isFetching, players, isFetchError}) => {
  if(isFetchError) {
    return null;
  }
  
  let {first, second} = players;
  return (
    <div className={isFetching ? " players players_inactive" : "players"}>
      <div className="player">
        <img src={first.path} alt={first.name} title={first.name}/>
      </div>
      <div className="player">
        <img src={second.path} alt={second.name} title={second.name}/>
      </div>
    </div>
  )
}

export default Players;