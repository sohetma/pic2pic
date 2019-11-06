function searchPhotos (query){
  let clientId = "";
  let url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${query}`;

  fetch(url)
    .then(function(data){
      return data.json();
    })
    .then(function(data){
      console.log(data);
    })
}
