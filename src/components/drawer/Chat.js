import React from 'react';
import './Chat.css';

// Component chat : its here we chat (empty for the moment)
class Chat extends React.Component  {
  constructor(props){
    super(props);

    this.state ={
      message : {}
    }
  }

  render(){
    return (
      <div className="Chat">
        <section className="messages"></section>
        <span className="tryWord"> try a word </span>
      </div>
    )
  }
};

export default Chat;
