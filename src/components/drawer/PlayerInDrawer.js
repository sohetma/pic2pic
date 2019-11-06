import React from 'react';
import './PlayersInDrawer.css'

// Component player with its avatar, username and points
const PlayerInDrawer = ({username, avatar, points}) => (
  <div className = "playerInDrawer">
    {
    !avatar
      ? <img src={"https://www.drupal.org/files/issues/default-avatar.png"} alt={username} className="imageAvatar" />
      : <img src={avatar} alt={username} className="imageAvatar" />
    }
    <div className="info-player">
      <h3>{username}</h3>
      <h4>{points} points</h4>
    </div>
  </div>
);

export default PlayerInDrawer;
