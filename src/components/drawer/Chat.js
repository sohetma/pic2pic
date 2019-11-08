import React from 'react';
import './Chat.css';

// Component chat : its here we chat (empty for the moment)
const Chat = props => {
  return (
  <div className="Chat">
    <section className="messages"></section>
    <label className="tryWord"> try a word </label>
  </div>
  )
};

export default Chat;
