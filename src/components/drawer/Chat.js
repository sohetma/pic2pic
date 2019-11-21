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
        endpoint: "192.168.0.248:4001"
        // "192.168.0.248:4001"
    }
  }

  componentDidMount () {
    this.socket = socketIOClient(this.state.endpoint);
    this.socket.on('RECEIVE_MESSAGE', data => {
      this.addMessage(data);
    })
  }

    addMessage = (data) => {
      this.setState({
        messages : [...this.state.messages, data]
      })
    }


    handleChange = (event) => {
        this.setState({ isWriting: true })
        this.setState({
            currentInput: event.target.value
        });
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
        let date = new Date().toLocaleString();
        let from = this.whoTalk();
        let sender = 'someone';
        let msg =  this.state.currentInput;

        if (this.props.players.length > 0){
          let senders = this.props.players;
          sender = senders[0].username;
        }

        sender = this.props.currentPlayer.username;
        //

        this.setState({ isWriting: false })

        this.socket.emit('chat message', {
          content : msg,
          sender : sender,
          date : date

          // if (this.state.currentInput !== '') {
          //      let newMessages = this.getNewMessages(msg
          //      );
          //      this.setState({
          //          messages: newMessages
          //      })
          //      this.sendMessage();
          //
          // }

      })

      event.preventDefault();
      this.props.updateLastMessage(msg,sender);
      this.setState({currentInput: ''})

    }



    getNewMessages = (msg) => {
        let newDate = new Date().toLocaleString();
        let from = this.whoTalk();
        let sender = 'someone';

        if (this.props.players.length > 0){
          let senders = this.props.players;
          sender = senders[0].username;
        }

        let existingMessages  = this.state.messages;
        // let msg = this.state.currentInput;

        let newMessage = { content: from === sender
          ? msg
          : msg.substring(0, msg.length - 5),
                            sender: from,
                            date: "On " + newDate }

                            console.log('client speak', newMessage);

        existingMessages.push(newMessage)
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

    // componentDidMount = () => {
    //     let buttonCol = document.getElementById("red");
    //     const socket = socketIOClient(this.state.endpoint);
    //     // setInterval(this.send(), 10000)
    //     socket.on('change color', (col) => {
    //         buttonCol.style.color = col
    //     })
    // }


    render () {
        return (
        <div>
            <div className="chat-zone">
                <AnswerBoard
                    key={i++}
                    messages={this.state.messages}
                    players={this.props.players}
                    currentPlayer={this.props.currentPlayer}>
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
