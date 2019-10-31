import React from 'react';
import PlayerInDrawer from './PlayerInDrawer.js';

// Component players with all infos on play
// players must be an array
const PlayersInDrawer = (props) => (
  <div className = "playersInDrawer">
    <p>coucou </p>
    {
      <PlayerInDrawer username={props.players[0].username} avatar={props.players[0].avatar} points={props.players[0].points} />
    }
  </div>
);

export default PlayersInDrawer;

  {/*{console.log(`player 0 : ${props.players[0]}`)}*/}
