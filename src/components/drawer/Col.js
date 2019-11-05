import React from 'react';
import './Col.css'


const Col = (props) => (
  <button
    className = "colButton"
    style={{backgroundColor : props.color, color: 'white'}}
    onClick={() => props.updateColor(props.color)}
  >{props.name}</button>
);

export default Col;
