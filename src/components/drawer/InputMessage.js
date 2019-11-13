import React from 'react';

const InputMessage = ({addMessage, confirmMessage, currentMessage}) => {

    return (
    <form className="chat-form" onSubmit={(event, currentMessage) => confirmMessage(event, currentMessage)}>
        <input className="text-area" type="text" placeholder="Send your message" value={currentMessage} onChange={(event) => addMessage(event)}></input>
    </form>
    )
}

export default InputMessage;

//<input className="submit-button" type="submit" value="Send"></input>