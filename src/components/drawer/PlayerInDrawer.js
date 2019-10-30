import React from 'react';

// Component player with its avatar, username and points
const PlayerInDrawer = props => (
  <div className = "playerInDrawer">
    {
    !props.avatar
      ? <img src={"https://www.drupal.org/files/issues/default-avatar.png"} alt={firstname}/>
      : <img src={props.avatar} alt={props.username}/>
    }
    <h3>{props.username}</h3>
    <h4>{props.points}</h3>
  </div>
);

export default PlayerInDrawer;
