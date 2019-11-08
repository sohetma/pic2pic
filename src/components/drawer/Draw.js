import React from 'react';
import Matrix from './Matrix';
import Palette from './Palette';
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
    return ['#36486b','#618685','#b2b2b2','#80ced6','#d5f4e6','white'];
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
        <Matrix theColor={this.state.theColor} choiceColor={this.state.color} />
        <Palette color={this.state.color} name={this.state.name} updateColor={this.updateColor} />
      </div>
    );
  }
}

export default Draw;
