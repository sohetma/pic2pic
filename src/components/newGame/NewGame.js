import React from 'react';
import Container from './Container.js';
import InviteContainer from './InviteContainer.js';
import CreateYourGame from './CreateYourGame.js';
import Background from './Background.js';
import ButtonStart from './BoutonStart.js'

// Return children's components : this the page where we create a game

const NewGame = (props) => (
  <div className="newgame">
    <CreateYourGame/>
    <ButtonStart/>
    <Container/>
    <InviteContainer/>
  </div>
  
);

export default NewGame;
