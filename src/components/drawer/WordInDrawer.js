import React from 'react';

// Component word : its the word to find for win the game
// Take an argument : props.word
const WordInDrawer = props => (
  <div className = "wordInDrawer">
    <h3>{props.word}</h3>
  </div>
);

export default WordInDrawer;
