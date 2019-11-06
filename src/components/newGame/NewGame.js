import React from 'react';
import Container from './Container.js';
import InviteContainer from './InviteContainer.js';

// Return children's components : this the page where we create a game

const NewGame = (props) => (
  <div className="newgame">
    <Container/>
    <InviteContainer/>
  </div>
);

export default NewGame;
