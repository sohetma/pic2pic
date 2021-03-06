import React from 'react';
import Matrix from './Matrix.js';
import Palette from './Palette.js';
import './Draw.css'



class Draw extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color : this.generateColors(),
      name : this.generateName(),
      theColor : 'black'
    };
  }

  generateColors = () => {
    return ['#36486b','#618685','#b2b2b2','#80ced6','#d5f4e6','#FFFFFF'];
  }

  generateName = () => {
    return ["Red" , "Blue", "Black", "green", "yellow",'white']
  }

  updateColor = (color) => {
    this.setState({
      theColor : color
    })
  }

  render = () =>  {
    return (
      <div className="draw">
        <Matrix drawerOrPlayer={this.props.drawerOrPlayer} theColor={this.state.theColor} choiceColor={this.state.color} ></Matrix>
        <Palette color={this.state.color} name={this.state.name} updateColor={this.updateColor} ></Palette>
      </div>
    );
  }
}

export default Draw;
