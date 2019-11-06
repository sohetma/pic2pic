function searchPhotos (query){
  let clientId = "";
  let url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${query}`;

  fetch(url)
    .then(function(data){
      return data.json();
    })
    .then(function(data){
      console.log(data);

      data.results.forEach(photo =>{
        let result  = `<img src="${photo.urls.regular}">
                       <a href="${photo.link.download}">
        `;
      })
    })
}



// ES Modules syntax
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: "{APP_ACCESS_KEY}" });

const unsplash = new Unsplash({
  accessKey: "{APP_ACCESS_KEY}",
  // Optionally you can also configure a custom header to be sent with every request
  headers: {
    "X-Custom-Header": "foo"
  },
  // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
  timeout: 500 // values set in ms
});

unsplash.users.profile("naoufal")
  .catch(err => {
    // Your flawless error handling code
  });

unsplash.search.photos(query, 1, 3, { orientation: "portrait" })
  .then(toJson)
  .then(json => {
    // Your code
  });



















  
