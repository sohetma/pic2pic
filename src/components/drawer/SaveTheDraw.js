import React from 'react';
import './ButtonRefresh.css';


const SaveTheDraw = (props) => (
  <button
    id = "heart"
    className = "SaveTheDraw"
    onClick = {() => props.saveTheDraw()}
  ><span> ❤️ </span></button>
);

export default SaveTheDraw;
// Save your draft
