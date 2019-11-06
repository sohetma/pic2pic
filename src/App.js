import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import './components/Container/Container.css';
import ButtonStart from './components/newGame/BoutonStart';
import Header from './Header';
import './components/newGame/BoutonStart.css'
import InviteContainer from './components/Container/InviteContainer';
import './components/Container/InviteContainer.css';




function App() {

  return (
    <div>
       <Header/>
       <Container/>
       <InviteContainer/>
    </div>
  );
}

export default App;
