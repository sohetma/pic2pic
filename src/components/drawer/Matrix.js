import React from 'react';
import Pix from './Pix.js';
import './Pix.css'


class Matrix extends React.Component{
  render(){
    const taille = 100;

    let matrix = new Array(taille);
    let array = new Array(taille);

    for (let j = 0; j < taille ; j++){
      array[j] = <Pix />;
    }

    const arrayMod = <div className="array"> {array} </div>;

    for(let i = 0 ; i < taille ; i ++){
      matrix.push(arrayMod);
    }

    return <div className="matrix"> {matrix} </div>
  }

}

export default Matrix;

// function matrix(taille){
//   let matrix = new Array(taille);
//   let array = new Array(taille);
//
//   for (let j = 0; j < taille ; j++){
//     array[j] = <Pix taille={3} />;
//   }
//
//   for(let i = 0 ; i < taille ; i ++){
//     matrix[i] = array;
//   }
//   console.log(matrix)
//   return matrix;
// }
//
// matrix = matrix(10);
