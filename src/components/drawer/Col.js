import React from 'react';
import './Col.css'


const Col = (props) => (
  <button
    className = "colButton"
    style={{backgroundColor : props.color, color: 'white', border : props.color}}
    onClick={() => props.updateColor(props.color)}
  ></button>
);

export default Col;
