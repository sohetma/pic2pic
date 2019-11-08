import React from 'react';
import HowToPlay from './HowToPlay.js'
import './HeroHeader.css';

function HeroHeader() {
    return (
        <>
        <div className="hero-header">

            <h2>A vos sourirs, prêt ? Dessinez !</h2>
            <hr />
            <h1><span className="pic-1">Pic</span><span className="deux">2</span><span className="pic-2">Pic</span></h1>
            <div className="hero-pen"></div>
            <a href="http://localhost:3000/game" className="button" >start to draw</a>
            
        </div>
        <hr />
        <HowToPlay />
        </>
    )
  }

export default HeroHeader;
