import React , { Component } from 'react';
import './popup.css';
import Popup from "reactjs-popup";



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
    this.openModal()
  }


  render() {
    return (
      <div>

        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close-popup" onClick={this.closeModal}>
              &times;
            </a>
            <h1 style={{marginBottom : '10px'}}> Congrats {this.props.winner} ! </h1>
            <img src='../img/pod.jpg' alt="podium" />
          </div>


          <div className="actions">
          <Popup
            trigger={<button className="button"> Action </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              On va lui dire qqch ici
            </span>
          </Popup>

          <Popup
            trigger={<button onClick={() => this.closeModal} className="close-popup-button"> New Game </button>}
            position="top center"
            closeOnDocumentClick
          >
          <span>
            On va lui dire qqch ici aussi
          </span>
          </Popup>
        </div>
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
