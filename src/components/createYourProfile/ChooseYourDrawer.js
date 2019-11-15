import React from 'react';
import chooseYourDrawer from './ChooseYourDrawer.js';
import './ChooseYourDrawer.css';
import {Link, NavLink} from "react-router-dom";


class ChooseYourDrawer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      username : [],
      avatarsList : []
    }
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

                <div className="name-profile">

                    <input className="user-profile" id="username-avatar" type="text" placeholder="Enter your username here"></input>
                </div>

                <div className="avatar-profile">

                    <div className="choose-drawer">
                        <h2>Choose your drawer</h2>
                    </div>
                    <div className="list-avatars">

                        <div className="avatar-profile ghost"></div>
                        <div className="avatar-profile frog"></div>
                        <div className="avatar-profile genie"></div>
                        <div className="avatar-profile skeleton"></div>
                        <div className="avatar-profile unicorn"></div>
                        <div className="avatar-profile mermaid"></div>
                        <div className="avatar-profile invisibleman"></div>
                        <div className="avatar-profile witch"></div>
                    </div>

                </div>
                
                <button className="player-play">
                  <NavLink className="button-play" activeClassName="active" exact to="/game"> Play </NavLink>
                </button>
            </div>
        </div>
    );
  }
}

export default ChooseYourDrawer;
