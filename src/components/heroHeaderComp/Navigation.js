import React from 'react';
import './Navigation.css';

const Navigation = (props)  => {
    return (

        <div className="sticky-navigation">
          <nav className="navBar">
            <ul className="menu">

              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#newGame">New Game</a>
              </li>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#drawer">Drawer</a>
              </li>

            </ul>
          </nav>



        </div>
    
       
    )
  }

export default Navigation;

