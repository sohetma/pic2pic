import React from 'react';
import {Switch, Route} from "react-router-dom";
import NewGame from './newGame/NewGame.js';
import ChooseYourDrawer from './createYourProfile/ChooseYourDrawer.js';
import Game from './drawer/Game.js';
import GamePlayer from './player/GamePlayer.js';

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
      themeGame : '',
      word : 'FindMe',
      hints : '',

    };
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
    let gamers = this.state.players;
    let nbPlayers = gamers.length;
    for (let i = 0; i < nbPlayers ; i++){
      let player = gamers[i];
      if(player.id === id && player.isDrawer === true){
        this.setState((prevState, {nbDrawer}) => ({
          nbDrawer : prevState+1
        }));
      }
    }
  }

  // setState 'isDrawer' : change the role of player at the end of a part of the Game
  changeYourRole = () => {
    let gamers = this.state.players;
    let nbPlayers = gamers.length;
    let index = 0;
    for (let i = 0; i < nbPlayers ; i++){
      let player = gamers[i];
      if(player.isDrawer === true){
        index = player.id;
        this.setState((prevState, {isDrawer}) => ({
          isDrawer : false
        }));
      }
    }
    if(nbPlayers > index+1){
      index = 0;
    }
    if(gamers[index+1].isDrawer === false && this.HasAlreadyBeenDrawerNumber(index+1) <= 1){
      this.setState((prevState, {isDrawer}) => ({
        isDrawer : true
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
    let newPlayer = {
      id : this.getIdPlayer(),
      username : username,
      avatar : avatar,
      points : 0,
      isDrawer : isDrawer,
      nbDrawer : 0,
      url : isDrawer ? 'http://localhost:3000/game' : 'http://localhost:3000/player'
    }
    newPlayers.push(newPlayer);
    return newPlayers;
  }

  // setState 'points' : add points to the player who wins
  winThePart = (pts, username) => {
    let gamers = this.state.players;
    for(let i=0 ; i < this.state.players.length ; i++){
      let player = gamers[i];
      if(player.username === username){
        this.setState((prevState, {points}) => ({
          points : prevState+pts
        }));
      }
    }
  }

  // Create the players of the game
  handleSubmit = (event, avatar, username, isDrawer) => {
    let newPlayers = this.getNewPlayer(username,avatar,isDrawer);
    this.setState({
      players : newPlayers
    })
    event.preventDefault();
  }



  render = () =>  {
    return (
      <div className="play-game">
      <Switch>
        <Route path="/newGame" component={NewGame} />
        <Route path="/profile" component={ChooseYourDrawer} />
        <Route path="/game" component={Game} />
        <Route path="/player" component={Play} />
      </Switch>
    
      </div>
    );
  }
}

export default Play;
