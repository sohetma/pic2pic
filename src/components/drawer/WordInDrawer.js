import React from 'react';
import './WordInDrawer.css';

// Component word : its the word to find for win the game
// Take an argument : props.word
const WordInDrawer = props => (
  <div className = "wordInDrawer">
    <h3 className="theword">{props.word}</h3>

    <h1 className="hints"> _ _ _ _ _ </h1>
  </div>
);

export default WordInDrawer;
