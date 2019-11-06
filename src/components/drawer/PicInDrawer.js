import React from 'react';
import './PicInDrawer.css';

// Component pic return an image
// picInDrawer take an argument 'picture' and its a source
const PicInDrawer = props => (
  <div className = "picInDrawer">
    {
    !props.picture
      ? <img src={"https://www.drupal.org/files/issues/default-avatar.png"} alt={props.word}/>
      : <img src={props.picture} alt={"No picture here"}/>
    }
  </div>
);

export default PicInDrawer;
