import React , { Component } from 'react';
import './popup.css';
import Popup from "reactjs-popup";
import APP_ACCESS_KEY from './token.js';
const axios = require('axios');


class Popupic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      photos : [],
      photosTest : ['../img/cel.jpg', '../img/pod.jpg', '../img/wood.jpg'],
      selectedPic : ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      open: true
    });
  }

  closeModal() {
    this.setState({
       open: false
     });
  }

  componentDidMount = async () => {
    this.openModal();
    let query = this.props.word;

    // API THREE PICS
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: query},
        headers: {
            Authorization: APP_ACCESS_KEY
        }
    })

    const res = response.data.results;
    let result = [];

    res.forEach((photo,index) => {
      result[index] = photo.urls.regular;
      //console.log(typeof result[index], result[index]);
    })

    let photosList = result.slice(0,3);

    console.log('the result' , result);

    this.setState({
       photos : photosList,
       selectedPic : photosList[0]
      })
  }

  selectionPicture = (url) =>{
    console.log('url : ', url);
    this.props.updateUrl(url);
    this.setState({
      open : false,
      selectedPic : url
    })
  }

  render() {
    return (
      <div className="modal-pop">
        <Popup
          className="popup3pics"
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <h1> Choose a picture </h1>
          <div className="modal images-popup">
            <img src={this.state.photos[0]} alt="image-popup" className="close-popup image-unsplash" onClick={() => this.selectionPicture(this.state.photos[0])} />
            <img src={this.state.photos[1]} alt="image-popup" className="close-popup image-unsplash" onClick={() => this.selectionPicture(this.state.photos[1])} />
            <img src={this.state.photos[2]} alt="image-popup" className="close-popup image-unsplash" onClick={() => this.selectionPicture(this.state.photos[2])} />
          </div>
        </Popup>
      </div>
    );
  }
}

export default Popupic;