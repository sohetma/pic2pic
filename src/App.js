import React from 'react';
// import {Switch, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Play from './components/Play.js';




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
        <Play />
      </div>

    );
  }
}

export default App;
