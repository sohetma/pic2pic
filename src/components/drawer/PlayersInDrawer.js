import React from 'react';

// Component players with all infos on play
// players must be an array
const PlayersInDrawer = ({players}) => (
  <div className = "playersInDrawer">
  {
    for(let i = 0; i < players.length ; i++){
      <PlayerInDrawer />
      //<PlayerInDrawer username="test" avatar="https://www.drupal.org/files/issues/default-avatar.png" points="0" />;
    }
  }
  </div>
);

export default PlayersInDrawer;
