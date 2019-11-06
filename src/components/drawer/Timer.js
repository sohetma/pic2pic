import React from 'react';
import './Game.css';

// Timer component

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  stop() {
    this.setState(state => ({
      seconds: 0
    }));
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
        <h3> Seconds: {this.state.seconds} </h3>
        <p> Timer stop at 45 Seconds </p>
      </div>
    );
  }
}

export default Timer;
