import React from 'react';
import Pix from './Pix.js';
import MatrixInit from './MatrixInit.js'
import './Pix.css'


class Matrix extends React.Component{

  constructor(props) {
    super(props);
    //let mat = this.initArray.bind();
    this.state = {
      padcolor: "white",
      matrix : new MatrixInit()
    };
  }

  changeColor = () => {
    this.setState({
      padcolor: "black"
    });
  }

  render(){
    return (
      <MatrixInit />
    )
  }
}

export default Matrix;

  // initArray = () => {
  //   const taille = 16;
  //
  //   let matrix = new Array(taille);
  //   let array = new Array(taille);
  //
  //   for (let j = 0; j < taille ; j++){
  //     array[j] = <Pix boolean={false} color={this.state.padcolor}/>;
  //   }
  //
  //   const arrayMod = <div className="array"> {array} </div>;
  //
  //   for(let i = 0 ; i < taille ; i ++){
  //     matrix.push(arrayMod);
  //   }
  //
  //   return <div className="matrix"> {matrix} </div>
  //
  //   {console.log({matrix})}
  // }
