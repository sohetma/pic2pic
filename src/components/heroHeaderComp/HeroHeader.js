import React from 'react';
import HowToPlay from './HowToPlay.js';
import Contact from './Contact.js';
import { NavLink} from "react-router-dom";
import './HeroHeader.css';
import './Contact.css';

function HeroHeader() {
    return (

        <>

        <div className="hero-header">

            <h2>Learn English by playing Pic2Pic !</h2>
            <hr />
            <div className="logo-pic2pic"></div>
            <div className="hero-pen"></div>
            <NavLink className="button" activeClassName="active" exact to="/newgame"> Start to draw </NavLink>

        </div>
        <hr />
        <HowToPlay />
        <Contact />
        </>
    )
  }

export default HeroHeader;
