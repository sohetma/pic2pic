import React from 'react';
import logo from './logo.svg';
import './App.css';
//import ButtonStart from '.components/newGame/BoutonStart';
import Header from './components/Header';
import players from './utils.js'
import PlayersInDrawer from './components/drawer/PlayersInDrawer.js'


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      players
    };
  }

  render(){
    return (
      <div>
         <Header />
         <PlayersInDrawer players={["test player 0"]} />
      </div>
    );
  }
}

export default App;
