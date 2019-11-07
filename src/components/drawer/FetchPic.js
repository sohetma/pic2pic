import React , { Component } from 'react';
import './PicInDrawer.css';
import SearchBar from './SearchBar.js';

const axios = require('axios');

// Component pic return an image
// picInDrawer take an argument 'picture' (a source)
class PicInDrawer extends Component {
  constructor(props){
    super(props);

    this.state = {
      images : [], //array[0] of url of three pictures
      photo : ""
    }
  }

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term},
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

    console.log('the result' , result);

    this.setState({
       images: response.data.results,
       photo : result[0]
      })
}


  render() {
    console.log('in render' , this.state.photo)
    return (

      <div className="picInDrawer">
        <SearchBar userSubmit={this.onSearchSubmit}/>
          {
          !this.state.photo
            ? <img className="picFetch" src={"https://images.unsplash.com/photo-1461344577544-4e5dc9487184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3937&q=80 3937w"} alt={'avatar'}/>
            : <img className="picFetch" src={this.state.photo} alt={this.state.description}/>
          }
      </div>
    );
  }
}

export default PicInDrawer;
