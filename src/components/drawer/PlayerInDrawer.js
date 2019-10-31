import React from 'react';


// Component player with its avatar, username and points
const PlayerInDrawer = ({username, avatar, points}) => (
  <div className = "playerInDrawer">
    {
    !avatar
      ? <img src={"https://www.drupal.org/files/issues/default-avatar.png"} alt={username}/>
      : <img src={avatar} alt={username}/>
    }
    <h3>{username}</h3>
    <h4>{points}</h4>
  </div>
);

export default PlayerInDrawer;
