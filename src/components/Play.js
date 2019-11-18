import React from 'react';
import {Switch, Route} from "react-router-dom";
import HeroHeader from './heroHeaderComp/HeroHeader.js';
import NewGame from './newGame/NewGame.js';
import ChooseYourDrawer from './createYourProfile/ChooseYourDrawer.js';
import Game from './drawer/Game.js';
import GamePlayer from './player/GamePlayer.js';
import quickSort from './quickSort.js'


// Strategie :
// 1. Je recupere le nombre de joueur
// 2. Je sais qui est drawer et qui sont les players
// 3. En fonction de leur role, je redirige vers la bonne page
// 4. A la fin d'une partie, les roles changes


class Play extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players : [],
      themeGame : 'sport',
      word : 'FindMe',
      hints : '',
      drawerOrPlayer : false, // true if drawer
      nbPart : 0
    };
    this.handleSubmitTheme = this.handleSubmitTheme.bind(this);
  }

  // check if last one is drawer or player
  isDrawerOrPlayer = () =>{
    let gamers = this.state.players;
    let nbPlayers = gamers.length;
    this.setState({
      drawerOrPlayer : gamers[nbPlayers-1].isDrawer
    })
  }

  countNbPart = () => {
    this.setState((prevState, {nbPart}) => ({
      nbPart : prevState+1
    }));

    console.log(this.state.players);
    console.log(this.state.word);
    // console.log(this.state.nbPart);
  }


  // A finir
  //  Ordonner les players en fonction des points
  orderingPlayers = () =>{
    let positionId = [];
    let newPosition = [];
    let pts = [];
    let player;
    let gamers = this.state.players;
    let nbPlayers = gamers.length;

    for(let i=0; i < nbPlayers ; i++){
      player = gamers[i];
      pts.push(player.points);
      positionId.push(player.id);
    }
    let orderdArray = quickSort(pts);
  }

  // Reset the Game
  resetGame = () => {
    this.clearGame();
  }

  // ReInit the state players to an empty array
  clearGame = () => {
    this.setState({
      players : []
    })
  }

  // setState 'nbDrawer' : add nbDrawer by 1 if a player was a drawer ones
  HasAlreadyBeenDrawerNumber = (id) => {
    let nb;
    let gamers = this.state.players;
    let nbPlayers = gamers.length;
    for (let i = 0; i < nbPlayers ; i++){
      let player = gamers[i];
      if(player.id === id && player.isDrawer === true){
        player.nbDrawer +=1 ;
        nb = player.nbDrawer;
        this.setState((prevState) => ({
          players : gamers
        }));
      }
    }
    return nb;
  }

  // Return inidice Drawer
  getIndiceDrawer = () =>{
    let gamers = this.state.players;
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

    let gamers = this.state.players;
    let nbPlayers = gamers.length;
    let index = 0;
    let indiceDrawer = this.getIndiceDrawer();
    let passedHere = false;

    for (let i = 0; i < nbPlayers ; i++){
      let player = gamers[i];

      // Special case where there is only one player
      if(nbPlayers===1){
        player.isDrawer = true;
        this.setState((prevState) => ({
          players : gamers
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
        players : gamers
      }));
    }
  }

  // Get the id of a player
  getIdPlayer = () => {
    return this.state.players.length;
  }

  // Create a new player with all the propreties we need :
  // id (number), username (string), avatar (url), points (number)
  // isDrawer (boolean : drawer or player), nbDrawer (number), url
  addNewPlayer = (username, avatar, isDrawer) => {
    let newPlayers = this.state.players;
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
    newPlayers.push(newPlayer);
    return newPlayers;
  }

  // setState 'points' : add points to the player who wins
  winThePart = (pts, username) => {
    let gamers = this.state.players;
    for(let i=0 ; i < this.state.players.length ; i++){
      let player = gamers[i];
      // console.log('players' , player.username);
      // console.log('sender',username, pts);
      if(player.username === username){
        player.points += pts;
        this.setState((prevState) => ({
          players : gamers
        }));
      }
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
    if(this.state.players.length < 1){
      isDrawer = true;
    }
    else{
      isDrawer = false;
    }

    let newPlayers = this.addNewPlayer(username,avatar,isDrawer);
    this.setState({
      players : newPlayers
    })
    console.log(newPlayers);
    event.preventDefault();

    this.isDrawerOrPlayer(); // Is a drawer or a player ?
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
                players={this.state.players}
                winThePart={this.winThePart}
                countNbPart={this.countNbPart}
                changeYourRole={this.changeYourRole}
                handleSubmitTheme={this.handleSubmitTheme}
                theme={this.state.themeGame}
               />)}
            />

            <Route path="/player" render={ () => (
              <Game
                drawerOrPlayer={!this.state.drawerOrPlayer}
                isDrawerOrPlayer={this.isDrawerOrPlayer}
                players={this.state.players}
                winThePart={this.winThePart}
                countNbPart={this.countNbPart}
                changeYourRole={this.changeYourRole}
                handleSubmitTheme={this.handleSubmitTheme}
                theme={this.state.themeGame}
               />)}
            />
          </Switch>
        </div>
    );
  }
}

export default Play;
