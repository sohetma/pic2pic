// API fetch library
const fetch = require('node-fetch');
global.fetch = fetch;

fetch('https://api.github.com/users/github')
    .then(res => res.json())
    .then(json => console.log(json));



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




// unsplash.users.profile("naoufal")
//   .catch(err => {
//     // Your flawless error handling code
//   });
