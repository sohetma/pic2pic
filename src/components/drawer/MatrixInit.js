import React from 'react';
import Pix from './Pix.js'


class MatrixInit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      padcolor: "black",
      count : 0
    };
  }


  render(){
    const taille = 10;
    const taillePix = 1/taille;

    let matrix = new Array(taille);
    let array = new Array(taille);

    for (let j = 0; j < taille ; j++){
      array[j] = <Pix key={j} boolean={false} color={this.state.padcolor} height={taillePix} />;
    }

    for(let i = 0 ; i < taille ; i ++){
      matrix.push(<div key={i} className="array"> {array} </div>);
    }
    {console.log({matrix})}
    return <div className="matrix"> {matrix} </div>
  }

}

export default MatrixInit;
