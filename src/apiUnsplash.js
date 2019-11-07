// ES Modules syntax
import Unsplash, { toJson } from 'unsplash-js';
require('dotenv').config();
// import './.env';



const uploadPhotos= (query) => {
  const unsplash = new Unsplash({
    accessKey: "",
    secret: process.env.APP_SECRET_KEY,
    timeout: 500
  });
  //

  let result = [];

  unsplash.search.photos(query, 1, 3, { orientation: "portrait" })
    .then(toJson)
    .then(json => {
      console.log(json);

      // if(json === undefined){return;}

      json.results.forEach(photo => {
        result.push(`<img src="${photo.urls.regular}">`);
        console.log(photo.urls.regular);
      })
    })

    .catch(err => {
      console.log('error with json api');
      return;
    })

    return result;
}

let api = uploadPhotos('fruits');

export default api;
