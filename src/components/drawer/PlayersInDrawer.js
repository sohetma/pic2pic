import React from 'react';
/*import PlayerInDrawer from './PlayerInDrawer.js';*/

// Component players with all infos on play
// players must be an array
const PlayersInDrawer = ({players}) => (
  <div className = "playersInDrawer">
    {console.log(`player 0 : ${players[0]}`)}
    <p>coucou </p>

  </div>
);

export default PlayersInDrawer;

  {/*<PlayerInDrawer username=players[0].username avatar=players[0].avatar points=players[0].points />*/}
