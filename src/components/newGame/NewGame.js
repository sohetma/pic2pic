import React, {url} from 'react';
import Theme from './Background.js';
import Container from './Container.js';
import InviteContainer from './InviteContainer.js';
import CreateYourGame from './CreateYourGame.js';
import ButtonStart from './BoutonStart.js';
import './NewGame.css';


// Return children's components : this the page where we create a game

// NewGame in class
// fix naming
// Add style from state, to div classname newgame

//
class NewGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'photo_newgame.jpg',

    }
  }

  selectJpg = (themeValue) => {
    if (themeValue) {

    }
    // console.log("i am in select jpg function");

    return '.jpg'
  }

  changeTheme = (img) => {
    // console.log("i am in change Theme function");

    //update state.theme
  }

  render() {
      return (
        <div className="newgame" style={{backgroundImage: `url("${this.state.theme}")`}}>
          <Theme changeTheme={this.changeTheme} selectedTheme={1} />
          <CreateYourGame/>
          <ButtonStart/>
          <Container/>
          <InviteContainer/>
      </div>
      );
  }
};

export default NewGame;
