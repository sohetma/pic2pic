import React , { Component } from 'react';
import './popup.css';
import Popup from "reactjs-popup";
// import APP_ACCESS_KEY from './token.js';
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
    // console.log(query);

    // API THREE PICS
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: query},
        headers: {
            Authorization: 'Client-ID 95a56e4dbdbda45b38ebd65bfde2e487cc2b6afbb0a6fd9737d915f36d872a9b'
        }
    })

    const res = response.data.results;
    let result = [];

    res.forEach((photo,index) => {
      result[index] = photo.urls.regular;
      // console.log(typeof result[index], result[index]);
    })

    let photosList = result.slice(0,3);

    // console.log('the result' , result);

    this.setState({
       photos : photosList,
       selectedPic : photosList[0]
      })
  }

  selectionPicture = (url) =>{
    // console.log('url : ', url);
    this.props.updateTheUrl(url);
    this.setState({
      open : false,
      selectedPic : url
    })
  }

  render() {
    return (
      <div className="modal-pop">
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
        <div>
          <h1> Choose a picture </h1>
          <div className="modal images-popup">
            <img src={this.state.photos[0]} alt="image1-popup" id={"pop-image-unsplash"} className="close-popup image-unsplash" onClick={() => this.selectionPicture(this.state.photos[0])} />
            <img src={this.state.photos[1]} alt="image2-popup" className="close-popup image-unsplash" onClick={() => this.selectionPicture(this.state.photos[1])} />
            <img src={this.state.photos[2]} alt="image3-popup" className="close-popup image-unsplash" onClick={() => this.selectionPicture(this.state.photos[2])} />
          </div>
          <h2> {this.props.word} </h2>
        </div>
        </Popup>
      </div>
    );
  }
}

export default Popupic;
