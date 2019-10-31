import React from 'react';
import Pix from './Pix.js'

function matrix(taille){
  let matrix = new Array(taille);
  let array = new Array(taille);

  for (let j = 0; j < taille ; j++){
    array[j] = <Pix />;
  }

  for(let i = 0 ; i < taille ; i ++){
    matrix[i] = array;
  }
  console.log(matrix)
  return matrix;
}

matrix = matrix(10);


export default matrix;
