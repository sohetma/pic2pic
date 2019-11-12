import React from 'react';

// Component word : its the word to find for win the game

const HintsWord = props => (
  <h1 className="hints"> {props.hints}</h1>
);

export default HintsWord;
