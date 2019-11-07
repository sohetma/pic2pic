import React from 'react';
import './Game.css';

// Timer component

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 45
    };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds - 1
    }));
  }

  stop() {
    this.setState(state => ({
      seconds: 45
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
        <h2> Time : {this.state.seconds} </h2>
      </div>
    );
  }
}

export default Timer;
