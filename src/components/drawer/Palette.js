import React from 'react';
import Col from './Col.js';
import './Palette.css'


const Palette = (props) => (
  <div className="palette-gomme">

    <div className = "palette">
      <Col color={props.color[0]} name={props.name[0]} updateColor={props.updateColor}/>
      <Col color={props.color[1]} name={props.name[1]} updateColor={props.updateColor}/>
      <Col color={props.color[2]} name={props.name[2]} updateColor={props.updateColor}/>
      <Col color={props.color[3]} name={props.name[3]} updateColor={props.updateColor}/>
      <Col color={props.color[4]} name={props.name[4]} updateColor={props.updateColor}/>
      <Col color={props.color[5]} name={props.name[5]} updateColor={props.updateColor}/>
    </div>
  </div>
);

export default Palette;
