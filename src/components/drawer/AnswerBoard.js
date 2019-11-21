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
                    currentPlayer={this.props.currentPlayer}
                    content={message.content}
                    sender={message.sender}
                    date={message.date}
                    style={{
                        textAlign : message.sender === this.props.currentPlayer.username ? "left" : "right",
                        backgroundColor:  message.sender !== this.props.currentPlayer.username ? "blue" : "green",
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
