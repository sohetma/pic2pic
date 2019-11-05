import React from 'react';
import Matrix from './Matrix.js';
import Draw from './Draw.js';
import players from './utils.js';
import PlayersInDrawer from './PlayersInDrawer.js';
import './Game.css'

//console.log(players);

// Return children's components : this the page where we play

const Game = (props) => (
<div className="game">
   <PlayersInDrawer players={players} />
   <Draw />
</div>
);

export default Game;
