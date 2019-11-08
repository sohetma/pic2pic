import React from 'react';
import Matrix from './Matrix.js';
import Draw from './Draw.js';
import players from './utils.js';
import PlayersInDrawer from './PlayersInDrawer.js';
import Timer from './Timer.js';
import PicInDrawer from './PicInDrawer.js';
import FetchPic from './FetchPic.js';
import WordInDrawer from './WordInDrawer.js';
import Chat from './Chat.js';
import './Game.css';
import '../heroHeaderComp/HeroHeader.css';

//console.log(players);

// Return children's components : this the page where we play

const Game = (props) => (
<div className="game">
    <div className="header-game">
      <h1 className="title-game"><span className="pic-1">Pic</span><span className="deux">2</span><span className="pic-2">Pic</span></h1>
      <PlayersInDrawer players={players} />
      <Timer />
    </div>

    <div className="draw-game">
      <div className="pic-word">
        <FetchPic />
        <WordInDrawer word={"The word to draw"}/>
      </div>
      <Draw />
      <Chat />
    </div>
</div>
);

export default Game;

// <PicInDrawer word={"House"} picture={"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=architectuur-carport-dak-186077.jpg&fm=jpg"}/>
