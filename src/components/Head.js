import React,  {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import './Head.css';

const Head = (props) => (
  <div>
    <ul className="Header">
      <li> <NavLink activeClassName="active" exact to="/"> Home </NavLink></li>
      <li> <NavLink activeClassName="active" exact to="/newgame"> NewGame </NavLink></li>
      <li> <NavLink activeClassName="active" exact to="/game"> Game </NavLink></li>
    </ul>
  </div>

);

export default Head;
