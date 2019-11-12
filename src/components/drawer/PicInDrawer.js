import React , { Component } from 'react';
import './PicInDrawer.css';

// ES Modules syntax
import Unsplash, { toJson } from 'unsplash-js';
require('dotenv').config();


// Component pic return an image
// picInDrawer take an argument 'picture' (a source)
class PicInDrawer extends Component {
  constructor(props){
    super(props);

    this.state = {
      photo : [], //array[0] of url of three pictures
      description : "No picture here"
    }
  }

  fetchPhotos(query){
    const unsplash = new Unsplash({
      accessKey: "95a56e4dbdbda45b38ebd65bfde2e487cc2b6afbb0a6fd9737d915f36d872a9b",
      secret: process.env.APP_SECRET_KEY,
      timeout: 50000
    });
    //

    let result = [];

    unsplash.search.photos(query, 1, 3, { orientation: "portrait" })
      .then(toJson)
      .then(response => {

        response.results.forEach((photo,index) => {
          //result.push(`<img src="${photo.urls.regular}">`);
          result[index] = photo.urls.small;
          //console.log(typeof result[index], result[index]);
          //console.log(`the url ${index} is : `, photo.urls.regular);
        })

      })
      .catch(err => {
        console.log('error with json api');
        return;
      })

      // console.log(result);
      return result;
  }


  componentDidMount() {

    const query = "apple";
    let urlsPhotos = this.fetchPhotos(query);
    console.log(" are we here ", urlsPhotos);
    setInterval(1000)
    // console.log('urls : ', urlsPhotos[0] );

    // //console.log(url)
    this.setState({
      photo : urlsPhotos
    })
  }

  render() {
    console.log('in render' , this.state.photo)
    return (
      <div className="picInDrawer">
          {
          !this.state.photo
            ? <img src={"https://www.drupal.org/files/issues/default-avatar.png"} alt={'avatar'}/>
            : <img src={this.state.photo[0]} alt={this.state.description}/>
          }
      </div>
    );
  }
}

export default PicInDrawer;






// const PicInDrawer = props => (
//   <div className = "picInDrawer">
//     {
//     !props.picture
//       ? <img src={"https://www.drupal.org/files/issues/default-avatar.png"} alt={props.word}/>
//       : <img src={props.picture} alt={"No picture here"}/>
//     }
//   </div>
// );
//
