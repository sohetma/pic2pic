import React, {url} from 'react';
import Themes from './Background.js';
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
      theme: 'sport.jpg',
      thematic: '',
    }
    this.changeTheme = this.changeTheme.bind(this);
  }

  selectJpg = (themeValue) => {
  if (themeValue) {
  }
  // console.log("i am in select jpg function");
  return '.jpg'
}


  updateTheme = (word) => {
    let thematic = word;
    console.log('yaaaah', thematic);
      // this.setState({
      //   thematic : thematic
      // })
      // console.log('yaaaah', thematic);
  }


  changeTheme = (event, theme) => {
    this.props.handleSubmitTheme(event, theme);
    // console.log("i am in change Theme function");

    //update state.theme
  }

  render() {
      return (
        <div className="newgame" style={{backgroundImage: `url("${this.state.theme}")`}}>
          <Themes changeTheme={this.props.handleSubmitTheme}  updateTheme={this.updateTheme} selectedTheme={1} />
          <CreateYourGame/>
          <ButtonStart handleSubmitTheme={this.props.handleSubmitTheme}/>
          <Container/>
          <InviteContainer/>
      </div>
      );
  }
};

export default NewGame;
