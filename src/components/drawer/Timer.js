import React from 'react';
import './Game.css';
import socketIOClient from "socket.io-client";

// Timer component

class Timer extends React.Component {
  state = {
    seconds: 80,
    color : 'inherit',
    endpoint: "192.168.0.248:4001"
  };


  componentDidMount () {

    this.socket = socketIOClient(this.state.endpoint);

    this.socket.emit('TIMER', 80);

    this.socket.on('TIMER_BEGIN', count => {
      this.setState({
        seconds : count
      })
    })

    this.interval = setInterval(() => this.tick(), 1000);
    this.interval2 = setInterval(() => this.stop(), 80000);
  }

  tick = () => {
    let col;
    if(this.state.seconds <= 16){
      col = 'red';
    }

    this.setState(state => ({
      seconds: state.seconds - 1,
      color : col
    }));
  }

  stop = () => {
    // console.log('1', this.props.isPlaying);
    this.props.endGame();
    clearInterval(this.interval);
    // console.log('2', this.props.isPlaying);
    //alert("End of the party");
  }

  reset = () => {
    this.props.newGame();
    this.setState(state => ({
      seconds: 80,
      color : 'white'
    }));
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
