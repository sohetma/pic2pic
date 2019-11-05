import React from 'react';
import './Pix.css'

const Pix = (props) => (
  <td className="pixel"
          onMouseMove={() => props.updateGrid(props.lat, props.lng) }
          style = {{backgroundColor : !props.color ? 'inherit' : props.col}}
          ></td>

);

export default Pix;
