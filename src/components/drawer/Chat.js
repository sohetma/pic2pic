import React, { Component } from 'react';
import InputMessage from './InputMessage';
import AnswerBoard from './AnswerBoard';
import './Chat.css';

let i= 0;

class Chat extends Component {
    state = {
        currentInput: '',
        isWriting: false,
        messages: []
    }

    handleChange = (event) => {
        this.setState({ isWriting: true })
        this.setState({
            currentInput: event.target.value
        });
    }

    handleSubmit = (event, messageToAdd) => {
        this.setState({ isWriting: false })
        if (this.state.currentInput !== '') {
             let newMessages = this.getNewMessages();
             this.setState({
                 messages: newMessages
             })
             this.setState({currentInput: ''})
            }
            event.preventDefault();
    }



    getNewMessages = () => {
        let newDate = new Date().toLocaleString();
        let from = this.whoTalk();
        let sender = 'someone';

        if (this.props.players.length > 0){
          let senders = this.props.players;
          sender = senders[0].username;
        }

        let existingMessages  = this.state.messages;
        let newMessage = { content: from === sender ? this.state.currentInput: this.state.currentInput.substring(0, this.state.currentInput.length - 5),
                            sender: from,
                            date: "On " + newDate }
        existingMessages.push(newMessage);

        // retrieve the message in input
        let lengthMessages = existingMessages.length;
        if(lengthMessages===0){
          return;
        }
        else{
          let wordInput = existingMessages[lengthMessages-1]
          // console.log('input word : ',wordInput);
          let contentMessage = wordInput['content'];
          let playerMessage =  wordInput['sender'];
          this.props.updateLastMessage(contentMessage,playerMessage);
        }

        return existingMessages;
    }


    whoTalk = () => {
        var lastChar = this.state.currentInput.slice(-5);
        let sender = 'someone';
        if (this.props.players.length > 0){
          let senders = this.props.players;
          sender = senders[0].username;
        }

        // console.log('the sender is ', sender);

        // console.log(lastChar)
        if(lastChar==="#else") {
            return "someone else"
        } else {
            return sender
        }
    }


    render () {

        return (
        <div>
            <div className="chat-zone">
                <AnswerBoard
                    key={i++}
                    messages={this.state.messages}>
                </AnswerBoard>
                { this.state.isWriting ? "" : ""}
            </div>
            <div>
                <InputMessage type="text"
                            addMessage={this.handleChange}
                            confirmMessage={this.handleSubmit}
                            currentMessage={this.state.currentInput}>
                </InputMessage>
            </div>
        </div>
        )
    }
}

export default Chat;
