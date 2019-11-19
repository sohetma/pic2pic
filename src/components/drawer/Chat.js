import React, { Component } from 'react';
import InputMessage from './InputMessage';
import AnswerBoard from './AnswerBoard';
import './Chat.css';
import socketIOClient from "socket.io-client";

let i= 0;

class Chat extends Component {
  constructor(props){
    super(props);

    this.state = {
        currentInput: '',
        isWriting: false,
        messages: [],
        color : 'white',
        endpoint: "localhost:4001"
    }
  }

    handleChange = (event) => {
        this.setState({ isWriting: true })
        this.setState({
            currentInput: event.target.value
        });
    }

    getEndpoint = () => {
      let endpoint = "localhost:3000";
      if(this.props.drawerOrPlayer){
        endpoint = "localhost:3000/guesseur";
      }
      else{
        endpoint = "localhost:3000/drawer";
      }
      return endpoint;
    }

    sendMessage = () => {
      const socket = socketIOClient(this.state.endpoint);
      socket.emit('chat message', this.state.currentInput);
    }

    send = () => {
      // let endpoint = this.getEndpoint();
      const socket = socketIOClient(this.state.endpoint);
      console.log(this.state.color);
      socket.emit('change color', this.state.color) // change 'red' to this.state.color
    }

    setColor = (color) => {
       this.setState({
         color : color
        })
     }

    handleSubmit = (event, messageToAdd) => {
        this.setState({ isWriting: false })
        if (this.state.currentInput !== '') {
             let newMessages = this.getNewMessages();
             this.setState({
                 messages: newMessages
             })
             this.sendMessage();
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
        let newMessage = { content: from === sender
          ? this.state.currentInput
          : this.state.currentInput.substring(0, this.state.currentInput.length - 5),
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

    componentDidMount = () => {
        let buttonCol = document.getElementById("red");
        const socket = socketIOClient(this.state.endpoint);
        setInterval(this.send(), 10000)
        socket.on('change color', (col) => {
            buttonCol.style.color = col
        })

        setInterval(this.sendMessage(), 1000)
    }


    render () {
        return (
        <div>
            <div className="chat-zone">
              <button onClick={() => this.send() }>Change Color</button>
              <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
              <button id="red" onClick={() => this.setColor('red')}>Red</button>
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
