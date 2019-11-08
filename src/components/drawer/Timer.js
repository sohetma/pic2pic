import React from 'react';
import './Game.css';
import './Timer.css';

// Timer component

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 45,
      color : 'inherit'
    };
  }

  tick() {
    let col;
    if(this.state.seconds <= 16){
      col = 'red';
    }

    this.setState(state => ({
      seconds: state.seconds - 1,
      color : col
    }));
  }

  stop() {
    this.setState(state => ({
      seconds: 45,
      color : 'black'
    }));
    //alert("End of the party");
  }


  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.interval = setInterval(() => this.stop(), 45000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <div className="timer">
        <h1 style={{color : this.state.color}}> {this.state.seconds} </h1>
      </div>
    );
  }
}

export default Timer;
