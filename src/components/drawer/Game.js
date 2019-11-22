import React , { Component } from 'react';
// import Matrix from './Matrix.js';
import Draw from './Draw.js';
// import players from './utils.js';
import PlayersInDrawer from './PlayersInDrawer.js';
import Timer from './Timer.js';
// import PicInDrawer from './PicInDrawer.js';
import FetchPic from './FetchPic.js';
import WordInDrawer from './WordInDrawer.js';
import Chat from './Chat.js';
import '../../App.css';
import './Game.css';
import '../heroHeaderComp/HeroHeader.css';

import ControlledPopup from './ControlledPopup.js';
import Popupic from './PopupPics.js';
import Navigation from '../heroHeaderComp/Navigation.js';
import '../heroHeaderComp/Navigation.js';
import socketIOClient from "socket.io-client";

//console.log(players);

// Return children's components : this the page where we play

class Game extends Component{

constructor(props){
  super(props);
  this.state = {
    isPlaying : true,
    start : true,
    latestMessage : '',
    winner : 'noWinner',
    isWinner : false,
    urlPic: '',
    endpoint: "192.168.0.248:4001"

  }
}

componentDidMount(){
  this.socket = socketIOClient(this.state.endpoint);

  this.socket.on('RECEIVE_POPUP', data => {
    // console.log('the xinner is : ', data);
    this.setState({
      winner : data,
    })
  })

  this.socket.on('RECEIVE_OPEN_POPUP', data => {
    this.setState({
      isPlaying : data
    })
  })

  this.socket.on('RECEIVE_PIC_POPUP', data => {
    this.setState({
      start : data
    })
  })

}

startGame = () => {
  this.setState({
    start : true
  })
}


newGame = () => {
  this.setState({
    isPlaying : true
  })
}

endGame = () => {
  this.setState({
    winner : 'noWinner',
    start : false
  })
}

updateTheUrl = (url) => {
  this.setState({
    urlPic : url,
    start : false
  })
  this.props.updateUrl(url);
}

updateLastMessage = (message,sender) => {
  console.log(message, sender);
  this.setState((prevState, {latestMessage}) => ({
    latestMessage : message
  }));
  this.checkMessage(message,sender);
}


  // Function yo check every last word enter in chat
  checkMessage = (message,sender) => {
    // console.log('word try : ', message);
    console.log('the good word  : ', this.props.word);

    // if(message===this.state.word && this.state.winner === sender){
    //   alert('You already found the good word.')
    // }

    if(message===this.props.word){
      this.setState({
        winner : sender,
        isPlaying : false
      })
      this.props.winThePart(3,sender);
      this.socket.emit('SEND_POPUP', sender);
      this.socket.emit('OPEN_POPUP', false);

    }
  }

  newPartOnGame = () => {
    // console.log('new part ');
    this.startGame();
    this.newGame();
    // this.props.changeYourRole();
    this.props.countNbPart();
    // this.props.isDrawerOrPlayer();
    this.props.sendSocket();
    this.socket.emit('OPEN_POPUP', true);
    this.socket.emit('POPUP_PIC', true);
  }



render(){
  return (

    <div className="game">

         <Navigation />

        <div className="header-game">
          {this.props.drawerOrPlayer && this.state.start && <Popupic updateTheUrl={this.updateTheUrl} word={this.props.word} />}
          <div className="logo3-pic2pic"></div>

          <PlayersInDrawer players={this.props.players} />
          <Timer endGame={this.endGame} newGame={this.newGame} isPlaying={this.state.isPlaying}  />
          {!this.state.isPlaying && <ControlledPopup currentPlayer={this.props.currentPlayer} winner={this.state.winner} newPartOnGame={this.newPartOnGame} drawerOrPlayer={this.props.drawerOrPlayer} />}
        </div>

        <div className="draw-game">
          <div className="pic-word">
            {this.props.drawerOrPlayer ? <FetchPic word={this.props.word}  urlPic={this.props.urlPic}/> : <div className="logo2-pic2pic"></div> }
            <WordInDrawer word={this.props.word} hints={this.props.hints} drawerOrPlayer={this.props.drawerOrPlayer} />
          </div>
          <Draw drawerOrPlayer={this.props.drawerOrPlayer} />
          <Chat players={this.props.players} updateLastMessage={this.updateLastMessage} currentPlayer={this.props.currentPlayer} dateLastMessage={this.updateLastMessage} drawerOrPlayer={this.props.drawerOrPlayer} />
        </div>
    </div>
    );
  }
}

export default Game;

// <PicInDrawer word={"House"} picture={"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=architectuur-carport-dak-186077.jpg&fm=jpg"}/>
// <h1 className="title-game"><span className="pic-1">Pic</span><span className="deux">2</span><span className="pic-2">Pic</span></h1>
