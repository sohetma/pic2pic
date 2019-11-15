import React from 'react';
import './InputMessage.css';
import './Chat.css';


const InputMessage = ({addMessage, confirmMessage, currentMessage}) => {

    return (
    <form className="chat-form" onSubmit={(event, currentMessage) => confirmMessage(event, currentMessage)}>
        <input className="text-area" type="text" placeholder="Send your message" value={currentMessage} onChange={(event) => addMessage(event)}></input>
        <input className="submit-button" type="submit" value="Send"></input>
    </form>
    )
}

export default InputMessage;

//
