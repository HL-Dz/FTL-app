import React from 'react';
import "./Players.scss";

const Players = ({isFetching, players}) => {
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