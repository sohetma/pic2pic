import React from 'react';
import HintsWord from './HintsWord.js';
import './WordInDrawer.css';

// Component word : its the word to find for win the game
// Take an argument : props.word
const WordInDrawer = props => (
  <div className = "wordInDrawer">
    <h3 className="theword">{props.word}</h3>
    <HintsWord hints={props.hints}/>
  </div>
);

export default WordInDrawer;
