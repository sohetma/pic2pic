
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
// const router = express.Router();

const listWords = ['soccer', 'tennis', 'volley','field hockey', 'rugby',
        'dance', 'boxe', 'basketball', 'handball', 'kayak',
        'windsurf','surf', 'sailing', 'kitesurf', 'badminton',
        'paddle', 'swimming', 'bycicle','running',
        'paragliding','taekwondo', 'fencing','skating', 'motocross'];


let chooseAWord = (words) => {
    let random = Math.floor(Math.random() * Math.floor(words.length-1));
    let theWord = words[random];
    return theWord;
}

// our localhost port
const port = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// app.use(function (req, res, next) {
//    // Website you wish to allow to connect
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    // Request methods you wish to allow
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//    // Request headers you wish to allow
//    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//    // Set to true if you need the website to include cookies in the requests sent
//    // to the API (e.g. in case you use sessions)
//    next();
// });
//
//
// app.get('/getWord', function(req, res, next){
//
//   let random = Math.floor(Math.random() * Math.floor(listWords.length-1));
//   let theWord = listWords[random];
//
//   res.json({
//     word : theWord
//   });
// })




// This creates our socket using the instance of the server
const io = socketIO(server)


// io.on('connection', function(socket){
//
// });

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected')



  // just like on the client side, we have a socket.on method that takes a callback function
  socket.on('change color', (color) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('Color Changed to: ', color)
    io.sockets.emit('change color', color)
  })


  socket.on('chat message', (msg) => {
    console.log('server speak' , msg);
    io.emit('RECEIVE_MESSAGE', msg);
    socket.broadcast.emit('RECEIVE_MESSAGE', msg);
  });


  socket.on('SEND_WORD', (words) => {
    let aWord = chooseAWord(words);
    // let random = Math.floor(Math.random() * Math.floor(words.length-1));
    // let aWord = words[random];
    console.log('server speak, a word : ', aWord);
    io.emit('RECEIVE_WORD', aWord);
    socket.broadcast.emit('RECEIVE_WORD', aWord);
  })



  socket.on('SEND_GRID', (grid) => {
    // console.log(grid);
    socket.broadcast.emit('RECEIVE_GRID', grid);
  })

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))

// module.export = router;
