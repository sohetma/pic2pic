import React , { Component } from 'react';

class GamePlayer extends Component{

  constructor(props){
    super(props);
    this.state = {
      word : 'wouwou',
    }
  }

  render(){
    return (
      <div className="game-player">
        <p> test page </p>
      </div>
    );
  }
}

export default GamePlayer;
