import React,  {Component} from 'react';

const Header = (props) => (
  <div>
    <ul className="Header">
      <li> <NavLink activeClassName="active" exact to="/"> Home </NavLink></li>
      <li> <NavLink activeClassName="active" exact to="/game"> Game </NavLink></li>
    </ul>
  </div>

);

export default Header;
