import React , { Component } from 'react';
import Matrix from './Matrix.js';
import Draw from './Draw.js';
import players from './utils.js';
import PlayersInDrawer from './PlayersInDrawer.js';
import Timer from './Timer.js';
import PicInDrawer from './PicInDrawer.js';
import FetchPic from './FetchPic.js';
import WordInDrawer from './WordInDrawer.js';
import Chat from './Chat.js';
import '../../App.css';
import './Game.css';
import '../heroHeaderComp/HeroHeader.css';
import words from '../words.js';
import './ButtonPic.css'

class ButtonPic extends Component{

  constructor(props){
    super(props);
    this.state = {
      numberOfApi : 0
    }
  }

  update = () => {
    let thematic = this.props.theme;
    let word = this.props.chooseAWord(thematic);
    this.props.onPlayerSubmit(word);

    this.setState({
      numberOfApi : this.state.numberOfApi+1
    })

    console.log('number of call to API unsplash : ', this.state.numberOfApi)
  }




  render(){
    return (
      <div className="ButtonPic">
        <button id="buttonPicture" onClick={() => this.update()}>Choose your word</button>
      </div>
      );
    }
}

export default ButtonPic;
