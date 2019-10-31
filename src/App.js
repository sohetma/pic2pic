import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import './components/Container/Container.css';
//import ButtonStart from '.components/newGame/BoutonStart';
import Header from './Header';




function App() {

  return (
    <div>
       <Header/>
       <Container/>
    </div>
  );
}

export default App;
