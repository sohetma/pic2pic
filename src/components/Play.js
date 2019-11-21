import React from 'react';
import {Switch, Route} from "react-router-dom";
import HeroHeader from './heroHeaderComp/HeroHeader.js';
import NewGame from './newGame/NewGame.js';
import ChooseYourDrawer from './createYourProfile/ChooseYourDrawer.js';
import Game from './drawer/Game.js';
import words from './words.js';
import socketIOClient from "socket.io-client";

// import GamePlayer from './player/GamePlayer.js';
// import quickSort from './quickSort.js';



// Strategie :
// 1. Je recupere le nombre de joueur
// 2. Je sais qui est drawer et qui sont les players
// 3. En fonction de leur role, je redirige vers la bonne page
// 4. A la fin d'une partie, les roles changes


class Play extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPlayers : [],
      currentPlayer : '',
      themeGame : 'sport',
      word : 'FindMe',
      hints : '',
      drawerOrPlayer : false, // true if drawer
      nbPart : 0,
      urlPic : '',
      theWord : 'aWord',
      endpoint: "192.168.0.248:4001"
    };
    this.handleSubmitTheme = this.handleSubmitTheme.bind(this);
  }

  componentDidMount () {
    this.socket = socketIOClient(this.state.endpoint);

    this.socket.emit('SEND_WORD', words.sport);

    this.socket.on('RECEIVE_WORD', data => {
      console.log('data received', data);
      this.addWord(data);
    })

    this.socket.on('RECEIVE_PLAYER', data => {
      let newUser = data.newUser;
      let users = data.users;
      console.log('receive new player', data);
      this.addPlayers(newUser, users);
    })

    this.socket.on('RECEIVE_NEW_PLAYERS', data => {
      console.log('receive new player', data);
      this.addPlayer(data);
    })


  }


  addPlayers = (newUser, players) => {
    console.log(newUser.username);
    this.setState({
      currentPlayer : newUser,
      allPlayers : [...players]
    })
  }

  addPlayer = (players) => {
    this.setState({
      allPlayers : [...players]
    })
  }


  addWord = (data) => {
    let hint = this.hints(data);
    this.setState({
      theWord : data,
      word : data,
      hints : hint
    })
  }

  // check if last one is drawer or player
  isDrawerOrPlayer = () =>{
    // let gamers = this.state.allPlayers;
    // let nbPlayers = gamers.length;
    let isDrawer = this.state.currentPlayer.isDrawer
    this.setState({
      // drawerOrPlayer : gamers[nbPlayers-1].isDrawer
      drawerOrPlayer : isDrawer
    })
  }

  countNbPart = () => {
    this.setState((prevState, {nbPart}) => ({
      nbPart : prevState+1
    }));

    // console.log(this.state.players);
    // console.log(this.state.word);
    // console.log(this.state.nbPart);
  }

  updateUrl = (url) => {
    this.setState({
      urlPic : url
    })
  }

  hints = word => {
    let hint = [];
    let dim = word.length;
    for(let i=0; i< dim; i++ ){
      if(word[i]=== ' '){
        hint.push('');
      }
      else{
        hint.push('_');
      }

    }
    let theHint = hint.join(' ')
    return theHint; // return a hint
  }

  chooseAWord = () => {
    let theme = this.state.themeGame;
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
    // console.log(listWords[random]);
    return listWords[random]
  }

  // A finir
  //  Ordonner les players en fonction des points
  // orderingPlayers = () =>{
  //   let positionId = [];
  //   let newPosition = [];
  //   let pts = [];
  //   let player;
  //   let gamers = this.state.players;
  //   let nbPlayers = gamers.length;
  //
  //   for(let i=0; i < nbPlayers ; i++){
  //     player = gamers[i];
  //     pts.push(player.points);
  //     positionId.push(player.id);
  //   }
  //   let orderdArray = quickSort(pts);
  // }

  // Reset the Game
  resetGame = () => {
    this.clearGame();
  }

  // ReInit the state players to an empty array
  clearGame = () => {
    this.setState({
      allPlayers : []
    })
  }

  // setState 'nbDrawer' : add nbDrawer by 1 if a player was a drawer ones
  HasAlreadyBeenDrawerNumber = (id) => {
    let nb;
    let gamers = this.state.allPlayers;
    let nbPlayers = gamers.length;
    for (let i = 0; i < nbPlayers ; i++){
      let player = gamers[i];
      if(player.id === id && player.isDrawer === true){
        player.nbDrawer +=1 ;
        nb = player.nbDrawer;
        this.setState((prevState) => ({
          allPlayers : gamers
        }));
      }
    }
    return nb;
  }

  // Return inidice Drawer
  getIndiceDrawer = () =>{
    let gamers = this.state.allPlayers;
    let nbPlayers = gamers.length;
    let indice = 0;
    for (let i = 0; i < nbPlayers ; i++){
      if(gamers[i].isDrawer === true){
        indice = i;
      }
    }
    return indice;
  }


  // setState 'isDrawer' : change the role of player at the end of a part of the Game
  changeYourRole = () => {

    // console.log('I m in changeyour role');

    let gamers = this.state.allPlayers;
    let nbPlayers = gamers.length;
    let indiceDrawer = this.getIndiceDrawer();
    let passedHere = false;

    for (let i = 0; i < nbPlayers ; i++){
      let player = gamers[i];

      // Special case where there is only one player
      if(nbPlayers===1){
        player.isDrawer = true;
        this.setState((prevState) => ({
          allPlayers : gamers
        }));
        return;
      }


      if(i === indiceDrawer){
        // console.log('I m in changeyour role where i is indice', indiceDrawer);
        this.HasAlreadyBeenDrawerNumber(i);
        if(indiceDrawer+1 >= nbPlayers){
          gamers[0].isDrawer = true;
        }
        else{
          // console.log('I m in changeyour role where i is indice : new drawer');
          gamers[indiceDrawer].isDrawer = false;
          gamers[indiceDrawer+1].isDrawer = true;
          passedHere = true;
        }
      }
      if(!passedHere){
        player.isDrawer = false;
      }

      this.setState((prevState) => ({
        allPlayers : gamers
      }));
    }
  }

  // Get the id of a player
  getIdPlayer = () => {
    return this.state.allPlayers.length;
  }

  // Create a new player with all the propreties we need :
  // id (number), username (string), avatar (url), points (number)
  // isDrawer (boolean : drawer or player), nbDrawer (number), url
  addNewPlayer = (username, avatar, isDrawer) => {
    let newPlayers = this.state.allPlayers;
    if(newPlayers.length >= 6){
      alert('There is already 6 players for this game.');
      return;
    }

    let newPlayer = {
      id : this.getIdPlayer(),
      username : username,
      avatar : avatar,
      points : 0,
      isDrawer : isDrawer,
      nbDrawer : 0,
      // url : isDrawer ? 'http://localhost:3000/game' : 'http://localhost:3000/player'
    }
    // newPlayers.push(newPlayer);

    this.socket.emit('SEND_PLAYER', newPlayer);

    // this.setState({
    //   currentPlayer : newPlayer
    // })
    return newPlayer;
  }

  // setState 'points' : add points to the player who wins
  winThePart = (pts, username) => {

    let gamers = this.state.allPlayers;
    for(let i=0 ; i < gamers.length ; i++){
      let player = gamers[i];
      // console.log('players' , player.username);
      // console.log('sender',username, pts);
      if(player.username === username){
        player.points += pts;
      }
      this.setState((prevState) => ({
        allPlayers : gamers
      }));
    }
  }


  handleSubmitTheme = (event,theme) => {
    this.setState({
      themeGame : theme
    })
    event.preventDefault();
  }

  // Create the players of the game
  handleSubmit = (event, avatar, username) => {
    let isDrawer = false;
    if(this.state.allPlayers.length < 1){
      console.log("this player is a drawer");
      isDrawer = true;
    }
    else{
      console.log("This player is not a drawer");
      isDrawer = false;
    }

    this.addNewPlayer(username,avatar,isDrawer);
    // this.setState({
    //   players : newPlayers
    // })
    // console.log(newPlayers);
    event.preventDefault();

    // this.isDrawerOrPlayer(); // Is a drawer or a player ?
  }


  sendSocket = () => {
    this.socket.emit('SEND_WORD', words.sport);
  }






  render(){
    return (
        <div className="play-game">
          <Switch>
            <Route exact path='/' component={HeroHeader} />

            <Route path="/newGame" render={ () => (
              <NewGame
                handleSubmitTheme={this.handleSubmitTheme}
              />)}
            />

            <Route path="/profile" render={ () => (
              <ChooseYourDrawer
                handleSubmit={this.handleSubmit}
              />)}
            />

            <Route path="/guesseur" render={ () => (
              <Game
                drawerOrPlayer={this.state.drawerOrPlayer}
                isDrawerOrPlayer={this.isDrawerOrPlayer}
                players={this.state.allPlayers}
                winThePart={this.winThePart}
                countNbPart={this.countNbPart}
                changeYourRole={this.changeYourRole}
                handleSubmitTheme={this.handleSubmitTheme}
                theme={this.state.themeGame}
                chooseAWord={this.chooseAWord}
                word={this.state.theWord}
                hints={this.state.hints}
                updateUrl={this.updateUrl}
                urlPic={this.state.urlPic}
                sendSocket={this.sendSocket}
                currentPlayer={this.state.currentPlayer}
               />)}
            />

            <Route path="/player" render={ () => (
              <Game
                drawerOrPlayer={!this.state.drawerOrPlayer}
                isDrawerOrPlayer={this.isDrawerOrPlayer}
                players={this.state.allPlayers}
                winThePart={this.winThePart}
                countNbPart={this.countNbPart}
                changeYourRole={this.changeYourRole}
                handleSubmitTheme={this.handleSubmitTheme}
                theme={this.state.themeGame}
                chooseAWord={this.chooseAWord}
                word={this.state.word}
                hints={this.state.hints}
                updateUrl={this.updateUrl}
                urlPic={this.state.urlPic}
                sendSocket={this.sendSocket}
                currentPlayer={this.state.currentPlayer}
               />)}
            />
          </Switch>
        </div>
    );
  }
}

export default Play;
