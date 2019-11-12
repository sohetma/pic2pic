import React , { Component } from 'react';
import './popup.css';
import Popup from "reactjs-popup";
const axios = require('axios');


class Popupic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      photos : [],
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

    // API THREE PICS
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: 'tennis'},
        headers: {
            Authorization: 'Client-ID 95a56e4dbdbda45b38ebd65bfde2e487cc2b6afbb0a6fd9737d915f36d872a9b'
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

  // selectionPicture = (url) =>{
  //   this.setState({
  //     open : false,
  //     selectedPic : url
  //   })
  // }

  render() {
    return (
      <div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal images-popup">
            <img src={this.state.photos[0]} alt="image1" className="close-popup image-unsplash" onClick={this.closeModal} />
            <img src={this.state.photos[1]} alt="image2" className="close-popup image-unsplash" onClick={this.closeModal} />
            <img src={this.state.photos[2]} alt="image3" className="close-popup image-unsplash" onClick={this.closeModal} />
          </div>
        </Popup>
      </div>
    );
  }
}

export default Popupic;
