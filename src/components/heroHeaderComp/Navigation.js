import React from 'react';
import './Navigation.css';
import {Link, NavLink} from "react-router-dom";

const Navigation = (props)  => {
    return (

        <div className="sticky-navigation">
          <nav className="navBar">
            <ul className="menu">

              <li className="li-navbar">
                <a href="#home">Home</a>
              </li>
              <li className="li-navbar">
                <a href="#createyourGame">Create Your Game</a>
              </li>
              <li className="li-navbar" >
                <a href="createYourProfile">Create Your Profile</a>
              </li>
              <li className="li-navbar">
                <a href="#game">Game</a>
              </li>

            </ul>
          </nav>



        </div>


    )
  }

export default Navigation;
