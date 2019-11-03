import React from 'react';
import logo from './logo.svg';
import './App.css';
//import ButtonStart from '.components/newGame/BoutonStart';
import Header from './components/Header';
import players from './utils.js'
import PlayersInDrawer from './components/drawer/PlayersInDrawer.js'
import Canvas from './components/drawer/Canvas.js'
import Matrix from './components/drawer/Matrix.js'


console.log(players);
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
      <div>
         <PlayersInDrawer players={players} />
         <Matrix />
      </div>
    );
  }
}

export default App;
