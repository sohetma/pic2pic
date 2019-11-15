import React from 'react';
import {Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HeroHeader from './components/heroHeaderComp/HeroHeader.js';
import Head from './components/Head.js';
import Game from './components/drawer/Game.js';
import NewGame from './components/newGame/NewGame.js';
import Play from './components/Play.js';
import ChooseYourDrawer from './components/createYourProfile/ChooseYourDrawer.js'

// import api from './apiUnsplash.js';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      qqch : ''
    };
  }

  render(){
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' component={HeroHeader} />
            <Route path="/newGame" component={NewGame} />
            <Route path="/profile" component={ChooseYourDrawer} />
            <Route path="/game" component={Game} />
            <Route path="/player" component={Play} />
          </Switch>
      </div>

    );
  }
}

export default App;
