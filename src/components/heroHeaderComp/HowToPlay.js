import React from 'react';
import './HowToPlay.css';

const HowToPlay = (props)  => {
    return (
        <>
            <div className="how-to-play">
            <h2>How to play <span className="pic-1">Pic</span><span className="deux">2</span><span className="pic-2">Pic</span></h2>
            <hr />
            </div>
            
            <div className="box my-gradient">
                
                <div className="create">
                    <div className="text"><p>I. create or join a game</p></div>
                    <div className="logoMore logo"></div>
                    <div className="logoJoinUs logo"></div>
                </div>
                
                <div className="name ">
                    <div className="text"><p>II. choose your name et character</p></div>
                    <div className="logoProfile logo"></div>
                </div>

                <div className="boxColumn">
                    
                    <div className="draw ">
                        <div className="text"><p>III. draw like an artist</p></div>
                        <div className="logoPencil logo"></div>
                        <div className="textDowns" >or</div>
                    </div>
                    
                    <div className="guess ">
                        <div className="text"><p>III. guess the drawing like a detective</p></div>
                        <div className="logoManThinking logo"></div>
                    </div>
                </div>
                
                <div className="score ">
                    <div className="text"><p>IV. compare your scores</p></div>
                    <div className="logoPodium logo"></div>
                </div>
            </div>
        </>
    )
  }

export default HowToPlay;

