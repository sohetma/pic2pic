import React, { Component } from 'react'
import Messages from './Messages'

let i = 0;

class AnswerBoard extends Component {

    render() {
        return (
            this.props.messages.map(message =>
                <Messages
                    key={i++}
                    players={this.props.players}
                    content={message.content}
                    sender={message.sender}
                    date={message.date}
                    style={{
                        textAlign : message.sender === this.props.players[0].username ? "left" : "right",
                        backgroundColor:  message.sender !== this.props.players[0].username ? "blue" : "green",
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
