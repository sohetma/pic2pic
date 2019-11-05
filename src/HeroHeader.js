import React from 'react'
function HeroHeader() {
    return (
        <div className="hero-header">

            <h2>A vos sourirs . Prêt ? Dessinez !</h2>
            <hr />
            <h1><span className="pic-1">Pic</span><span className="deux">2</span><span className="pic-2">Pic</span></h1>
            <img src="pen" alt="draw a pen" />
            <a href="http://localhost:3000/game" className="button" >start to draw</a>
        </div>
    )
  }

export default HeroHeader;
