import React from 'react';
import HintsWord from './HintsWord.js';
import './WordInDrawer.css';

// Component word : its the word to find for win the game
// Take an argument : props.word
const WordInDrawer = props => (
  <div className = "wordInDrawer">
    {props.drawerOrPlayer ? <h3 className="theword">{props.word}</h3> : <h3 className="theword">Hint</h3>}
    <HintsWord hints={props.hints}/>
  </div>
);

export default WordInDrawer;
