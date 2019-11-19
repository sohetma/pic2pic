import React from 'react';
import './PlayersInDrawer.css'
import PlayerInDrawer from './PlayerInDrawer.js';

// Component players with all infos on play
// players must be an array
const PlayersInDrawer = ({players}) => {

  let listPlayers = players.map(function(player, index) {
     return <PlayerInDrawer key={index} username={player.username} avatar={player.avatar} points={player.points} />
  });

  return (
    <div className = "playersInDrawer">
      {listPlayers}
    </div>
  )
};

export default PlayersInDrawer;

/*{console.log(`player 0 : ${props.players[0]}`)}*/
