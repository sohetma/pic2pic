import React from 'react';
import './Pix.css'

const Pix = (props) => (
  <td
    className="pixel"
    onMouseMove={props.actived ? () => props.updateGrid(props.lat, props.lng) : undefined}
    style = {{backgroundColor : !props.color ? 'white' : props.color}}
  ></td>

);

export default Pix;
