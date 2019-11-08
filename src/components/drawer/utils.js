const players = [
  {
    username : "Benoit",
    avatar : '../img/avatar1.png',
    points : 5
  },
  {
    username : "Nico",
    avatar : "../img/avatar2.png",
    points : 3
  },
  {
    username : "Guislain",
    avatar : "../img/avatar3.png",
    points : 2
  },
  {
    username : "Pierre",
    avatar : "../img/avatar4.png",
    points : 1
  },
  {
    username : "Maxime",
    avatar : "../img/avatar5.png",
    points : 0
  },
  {
    username : "Steve",
    avatar : "../img/avatar6.png",
    points : 0
  },

];

export default players;









































// import React from 'react';
// import Pix from './Pix.js'
//
// class MatrixInit extends React.Component {
//   render(){
//     const taille = 16;
//
//     let matrix = new Array(taille);
//     let array = new Array(taille);
//
//     for (let j = 0; j < taille ; j++){
//       array[j] = <Pix boolean={false} color={this.state.padcolor}/>;
//     }
//
//     const arrayMod = <div className="array"> {array} </div>;
//
//     for(let i = 0 ; i < taille ; i ++){
//       matrix.push(arrayMod);
//     }
//
//     return <div className="matrix"> {matrix} </div>
//   }
//
// }
//
// export default MatrixInit;
