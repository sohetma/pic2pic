import React from 'react';
import Pix from './Pix.js';
// import MatrixInit from './MatrixInit.js';
import './Pix.css';


const n = 200; // length grid

const createTable = () => {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let row = [];
            for (let j= 0; j < n; j++) {
                row.push('0'); /*PAS ICI*/
            }
    grid.push(row)
    }
    return grid;
}

const matrixInit = createTable();
console.log(matrixInit);

class Matrix extends React.Component{

  constructor(props) {
    super(props);
    //let mat = this.initArray.bind();
    this.state = {
      padcolor: "white",
      matrix : matrixInit,
      status :"mouseUp"
    };
  }

  onMouseDown = () => {
    this.setState({
        status: "mouseDown"
    })
  }

  onMouseUp = () => {
      this.setState({
          status: "mouseUp"
      })
  }

  changeColor = () => {
    this.setState({
      padcolor: "black"
    });
  }

  render = () => {
    return (
        <table onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
        <thead></thead>
          <tbody>
              {
              this.state.matrix.map((pixels, rowIndex) => (
                  <tr key={rowIndex}>
                      { pixels.map((pixel, colIndex) => (
                          <Pix
                              pixel={pixel}
                              hovered = {this.state.status}
                              key={"row" + rowIndex.toString() + "col" + colIndex.toString()}
                          />
                        )
                      )}
                  </tr>
                      )
                  )
              }
            </tbody>
          </table>
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
