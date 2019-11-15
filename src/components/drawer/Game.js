import React , { Component } from 'react';
import Matrix from './Matrix.js';
import Draw from './Draw.js';
import players from './utils.js';
import PlayersInDrawer from './PlayersInDrawer.js';
import Timer from './Timer.js';
import PicInDrawer from './PicInDrawer.js';
import FetchPic from './FetchPic.js';
import WordInDrawer from './WordInDrawer.js';
import Chat from './Chat.js';
import '../../App.css';
import './Game.css';
import '../heroHeaderComp/HeroHeader.css';
import words from '../words.js';
import ControlledPopup from './ControlledPopup.js';
import Popupic from './PopupPics.js';
import Navigation from '../heroHeaderComp/Navigation.js';
import '../heroHeaderComp/Navigation.js';

//console.log(players);

// Return children's components : this the page where we play

class Game extends Component{

constructor(props){
  super(props);
  this.state = {
    word : 'wouwou',
    hints : '',
    isPlaying : true,
    start : true,
    urlPic : '',
    latestMessage : '',
    winner : 'Who gonna win ?',
    isWinner : false

  }
}

startGame = () => {
  this.setState({
    start : true
  })
}

updateUrl = (url) => {
  this.setState({
    urlPic : url,
    start : false
  })
  // setInterval(console.log('url state', this.state.urlPIc), 1000);

}

newGame = () => {
  this.setState({
    isPlaying : true
  })
}

endGame = () => {
  this.setState({
    winner : false,
    start : false
  })
}

hints = word => {
  let hint = [];
  let dim = word.length;
  for(let i=0; i< dim; i++ ){
    if(word[i]=== ' '){
      hint.push(' ');
    }
    else{
      hint.push('_');
    }

  }
  let theHint = hint.join(' ')
  return theHint; // return a hint
}

chooseAWord = theme => {
  let listWords;
  // return the array in function of the theme : listWords
  if (theme === 'sport'){
    listWords = words.sport;
  }
  else if (theme ==='food') {
    listWords = words.food;
  }
  else if (theme === 'travel') {
      listWords = words.travel;
  }
  // return randomly a number between 0 and length-1 of listWords : i
  let random = Math.floor(Math.random() * Math.floor(listWords.length-1))
  // set state word with the word pic randomly : listWords[i]
  let hint = this.hints(listWords[random]);
  this.setState({
    word : listWords[random],
    hints : hint
  })
  return listWords[random]
}

  updateLastMessage = (message,sender) => {
    this.setState((prevState, {latestMessage}) => ({
      latestMessage : message
    }));
    this.checkMessage(message,sender);
  }


  // Function yo check every last word enter in chat
  checkMessage = (message,sender) => {
    console.log('word try : ', message);
    console.log('the good word  : ', this.state.word);

    if(message===this.state.word){
      this.setState({
        winner : sender,
        isPlaying : false
      })
    }
  }

  newPartOnGame = () => {
    alert('Je teste qqch');
  }

  componentWillMount () {
    let word = this.chooseAWord('sport');
  }


render(){
  return (

    <div className="game">

         <Navigation /> 

        <div className="header-game">
          {this.state.start && <Popupic updateUrl={this.updateUrl} word={this.state.word} />}
          <h1 className="title-game"><span className="pic-1">Pic</span><span className="deux">2</span><span className="pic-2">Pic</span></h1>
          <PlayersInDrawer players={players} />
          <Timer endGame={this.endGame} newGame={this.newGame} isPlaying={this.state.isPlaying}  />
          {!this.state.isPlaying && <ControlledPopup winner={this.state.winner} newPartOnGame={this.newPartOnGame} />}
        </div>

        <div className="draw-game">
          <div className="pic-word">
            <FetchPic word={this.state.word} chooseAWord={this.chooseAWord} urlPic={this.state.urlPic} />
            <WordInDrawer word={this.state.word} hints={this.state.hints} />
          </div>
          <Draw />
          <Chat updateLastMessage={this.updateLastMessage} />
        </div>
    </div>
    );
  }
}

export default Game;

// <PicInDrawer word={"House"} picture={"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=architectuur-carport-dak-186077.jpg&fm=jpg"}/>
