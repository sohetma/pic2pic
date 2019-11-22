import React , { Component } from 'react';
import './popup.css';
import Popup from "reactjs-popup";
// import socketIOClient from "socket.io-client";


class ControlledPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    // this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => {
    this.setState({
      open: true
    });
  }

  closeModal() {
    this.setState({
       open: false
     });
  }

componentDidMount(){
        this.setState({
          open : true,
        })
}
  // componentDidMount(){
  //     this.socket = socketIOClient(this.state.endpoint);
  //
  //     this.socket.on('RECEIV_OPEN_POPUP', data => {
  //       this.setState({
  //         open : true,
  //       })
  //     })
  // }

  buttonAction = () => {
    this.closeModal();
    this.props.newPartOnGame();
  }

  startANewGame = () => {
    this.closeModal();
  }


  render() {
    return (
      <div className="ControlledPopup">
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
        <>
          <div className="modal">
            <h1 style={{marginBottom : '10px'}}> Congrats {this.props.winner} ! </h1>
            <img src='../img/trophee.png' alt=" This part is finished" />
          </div>


          <div className="actions-popup">
            {this.props.currentPlayer.username===this.props.winner && <button className="button-actions" onClick={() => this.startANewGame()}> Start a new Game </button>}
            {this.props.currentPlayer.username===this.props.winner &&  <button className="continue-popup-button" onClick={() => this.buttonAction()} > Continue the Game </button>}
            {this.props.currentPlayer.username===this.props.winner && <button className="close-popup-button" onClick={() => this.closeModal()} > Stop the Game </button>}
            {this.props.currentPlayer.username !== this.props.winner && <p> Wait a second ... A new part will restart soon </p>}

          </div>
          </>
        </Popup>
      </div>
    );
  }
}

// render(<ControlledPopup />);
// <button className="button-popup" onClick={this.openModal}>
//   Popup
// </button>


export default ControlledPopup;
