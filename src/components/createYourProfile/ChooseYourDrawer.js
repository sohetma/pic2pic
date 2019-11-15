import React from 'react';
import chooseYourDrawer from './ChooseYourDrawer.js';
import './ChooseYourDrawer.css';
import {Link, NavLink} from "react-router-dom";



class ChooseYourDrawer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      username : [],
      avatarsList : [],
      value : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Votre username est : ' + this.state.value);
  }

  onInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
    this.enterUsername();
    console.log(this.state.value)
    event.preventDefault();
}

  enterUsername = () => {
    let input = this.state.value;
    let listUsername = this.state.username;
    listUsername.push(input);
    this.setState({
      username  : listUsername
    })
    // console.log(listUsername);
  }
 
  selected= (url) => {
    let listURL = this.state.avatarsList;
    listURL.push(url);
    this.setState({
      avatarsList  : listURL
    })
    console.log(listURL);
  }

  //  Il faut creer tes fonctions qui vont venir mettre a jour l'etat de ton composant quand quelqu'un a rempli le formulaire
  // Il va falloir creer un form ici on on recupere l'avatar choisi
  //  Il faut enfait crééer un input qui recuper le username de chaque nouveau joueur
  // J'ai cree une className mais je te laisse améliorer le style
  //  il faut que chaque image soit un bouton par exemple pour retenir quand tu cliques
  // et venir modifier l'etat en venant appliquer les fonctions que tu auras cree

  render(){
    return (
        <div className="pencils-background">

         <form onSubmit={this.handleSubmit}>

          <input className="input-form-player" type="text" value={this.state.value} placeholder="Enter your username" onChange={(event) => this.onInputChange(event)} />
          
                        

          <div className="list-avatars">
            <img src="../img/avatar1.png" onClick={() => this.selected("../img/avatar1.png") }></img>
            <img src="../img/avatar2.png" onClick={() => this.selected("../img/avatar2.png") }></img>
            <img src="../img/avatar3.png" onClick={() => this.selected("../img/avatar3.png") }></img>
            <img src="../img/avatar4.png" onClick={() => this.selected("../img/avatar4.png") }></img>
            <img src="../img/avatar5.png" onClick={() => this.selected("../img/avatar5.png") }></img>
            <img src="../img/avatar6.png" onClick={() => this.selected("../img/avatar6.png") }></img>
          </div>

            <button className="player-play">
              <NavLink className="button-play" activeClassName="active" exact to="/game"> Play </NavLink>
            </button>
              
          </form>
        </div>
    );
  }
}

export default ChooseYourDrawer;
