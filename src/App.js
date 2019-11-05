import React from 'react';
import {Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './HeroHeader.css'
//import ButtonStart from '.components/newGame/BoutonStart';
import Header from './components/Header';
import HeroHeader from './HeroHeader';



import Head from './Head.js'
import Game from './Game.js'


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      newPlayer : {
        username : '',
        avatar : '',
        points : 0
      }
    };
  }

  render(){
    return (
      <div className="App">

          <Switch>
            <Route exact path='/' component={HeroHeader} />
            <Route path="/game" component={Game} />
          </Switch>

      </div>

    );
  }
}

// const Home = () => {
//   return <h1>Welcome</h1>
// }

export default App;
