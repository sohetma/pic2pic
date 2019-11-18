import React from 'react';
import chooseYourDrawer from './ChooseYourDrawer.js';
import ShowAvatar from './ShowAvatar.js'
import './ChooseYourDrawer.css';
import {Link, NavLink} from "react-router-dom";



class ChooseYourDrawer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      username : [],
      avatarsList : [],
      value : '',
      url : '',
      isWritting : false
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  submit = (event) => {
    // alert('Votre username est : ' + this.state.value);
    this.props.handleSubmit(event, this.state.url, this.state.value);
  }

  usernameAlreadySelected = (event) => {
    if(this.state.username.contains(event.target.value)){
      alert('Username already selected. Choose an other one');
      return false;
    }
    return true;
  }

  avatarAlreadySelected = (url) => {
    if (this.state.avatarsList.contains(url)) {
      alert('Avatar already selected. Choose an other one');
      return false;
    }
    return true;
  }

  onInputChange = (event) => {
    // let usernameIsSelected = this.usernameAlreadySelected(event);
    // if(!usernameIsSelected){return;}
    this.setState({
      isWritting : true,
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
    // let urlIsSelected = this.avatarAlreadySelected(url);
    // if(!urlIsSelected){return;}
    let listURL = this.state.avatarsList;
    listURL.push(url);
    this.setState({
      url : url,
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
          <div className="components-page">

            <div className="title-profile">
              <h2><span className="word-create">Create </span><span className="word-your">your </span><span className="word-profile">profile</span></h2>
            </div>

           <form  className="form-profile avatar-profile" onSubmit={(event) => this.submit(event)}>

            <input className="input-form-player user-profile" type="text" value={this.state.value} placeholder="Enter your username" onChange={(event) => this.onInputChange(event)} />

            <div className="list-avatars">
              <img className="invisibleman" src="../img/avatar1.png" onClick={() => this.selected("../img/avatar1.png") }></img>
              <img className="invisibleman" src="../img/avatar2.png" onClick={() => this.selected("../img/avatar2.png") }></img>
              <img className="invisibleman" src="../img/avatar3.png" onClick={() => this.selected("../img/avatar3.png") }></img>
              <img className="invisibleman" src="../img/avatar4.png" onClick={() => this.selected("../img/avatar4.png") }></img>
              <img className="invisibleman" src="../img/avatar5.png" onClick={() => this.selected("../img/avatar5.png") }></img>
              <img className="invisibleman" src="../img/avatar6.png" onClick={() => this.selected("../img/avatar6.png") }></img>
            </div>

            </form>

            <button  className="player-buttons-play" onClick={(event) => this.submit(event)}>
              <NavLink className="button-play player-play" activeClassName="active" exact to="/guesseur"> Play </NavLink>
              <NavLink className="button-play player-play" activeClassName="active" exact to="/player"> Play </NavLink>
             </button>

            {this.state.isWritting && <ShowAvatar value={this.state.value} url={this.state.url} />}
          </div>
      </div>
    );
  }
}

export default ChooseYourDrawer;
