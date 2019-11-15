import React from 'react';
import './Navigation.css';
import {Link, NavLink} from "react-router-dom";

const Navigation = (props)  => {
    return (

        <div className="sticky-navigation">
          <nav className="navBar">
            <ul className="menu">

              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a href="../newGame">Create Your Game</a>
              </li>
              <li>
                <a href="../profile">Create Your Profile</a>
              </li>
              <li>
                <a href="../game">Game</a>
              </li>

            </ul>
          </nav>
        </div>


    )
  }

export default Navigation;
