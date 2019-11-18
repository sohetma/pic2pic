import React from 'react';
import './ChooseYourDrawer.css';

const ShowAvatar = (props) => (
  <div className="show-avatar">
     <h2><span>Hello </span>{props.value}</h2>
     {
       !props.url
       ?  <img className="invisibleman" src="https://www.drupal.org/files/issues/default-avatar.png" alt={props.value}></img>
       :  <img className="invisibleman" src={props.url} alt={props.value} ></img>
     }

  </div>

);

export default ShowAvatar;
