import React from 'react';
import './ButtonRefresh.css';


const SaveTheDraw = (props) => (
  <button
    className = "SaveTheDraw"
    onClick = {() => props.saveTheDraw()}
  > Save your draft </button>
);

export default SaveTheDraw;
