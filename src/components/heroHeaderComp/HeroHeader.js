import React from 'react';
import HowToPlay from './HowToPlay.js';
import {Link, NavLink} from "react-router-dom";
import './HeroHeader.css';

function HeroHeader() {
    return (
        <>
        <div className="hero-header">

            <h2>Learn English by playing Pic2Pic !</h2>
            <hr />
            <h1><span className="pic-1">Pic</span><span className="deux">2</span><span className="pic-2">Pic</span></h1>
            <div className="hero-pen"></div>
            <NavLink className="button" activeClassName="active" exact to="/newgame"> Start to draw </NavLink>

        </div>
        <hr />
        <HowToPlay />
        </>
    )
  }

export default HeroHeader;
