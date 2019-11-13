import React, { Component } from 'react'
import Messages from './Messages'


class AnswerBoard extends Component {

    render() {
        return (
            this.props.messages.map(message =>
                <Messages
                    content={message.content}  
                    sender={message.sender} 
                    style={{
                        backgroundColor: "blue",
                        borderRadius: "20px",
                        border: "2px solid #c3c3c3",
                        padding: "0 18px 10px",
                        marginBottom: "20px"
                    }}
                />
            
            )
        )
    }
}

export default AnswerBoard;