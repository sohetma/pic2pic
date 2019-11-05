import React from 'react';
import Pix from './Pix.js';
import ButtonRefresh from './ButtonRefresh.js'
// import MatrixInit from './MatrixInit.js';
import './Pix.css';

// class pixel {
//     constructor(colored, color){
//         this.isColored = colored;
//         this.color = color;
//     }
// }


class Matrix extends React.Component{

  constructor(props) {
    super(props);

    //console.log(this.updateGrid(this.createTable(10),1,2))

    this.state = {
      matrix : this.createTable(64),
      col: 'inherit',
      status :"mouseUp"
    };

    // console.log(this.freshGrid());
    // console.log(this.state.matrix);
    // console.log(this.updateGrid(1,1));
    // console.log(this.refresh());
  }



  createTable = dim => {
    console.log(' I m in createTable')
    let grid = [];
    for (let j = 0; j < dim ; j++){
      grid[j] = new Array(dim).fill(0); // new pixel(false, "white")
    }
    return grid;
    // const ruler = new Array(dim).fill("-Pixel-");
    // return ruler.map(x => ruler.map(y => 0));
  }

  freshGrid = () => {
    console.log('I m in fresh grid');
    return this.createTable(64);
  }

  updateGrid = (x, y, rgba) => {
    //console.log(this.state.matrix);
    if(this.state.matrix[x][y] === `😍`){return;}

    if(!this.props.theColor === 'black') {return;}

    let updateMyGrid = this.state.matrix;
    updateMyGrid[x][y] = `😍`;
    console.log('I m in update');

    return updateMyGrid;

    this.setState({
        matrix: updateMyGrid,
        col : 'blue'
    })
  }

  refresh = () => {

    console.log(' I m in refresh');

    this.setState({
      matrix : this.freshGrid()
    })
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


  render = () => {
    return (
       <div>
        <table onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
        <thead></thead>
          <tbody>
              {
              this.state.matrix.map((pixels, rowIndex) => (
                  <tr key={rowIndex}>
                      { pixels.map((pixel, colIndex) => (
                          <Pix
                              lat={rowIndex}
                              lng={colIndex}
                              col = {this.props.theColor}
                              color = {this.state.matrix[rowIndex][colIndex]}
                              updateGrid={this.updateGrid}
                              key={"row" + rowIndex.toString() + "col" + colIndex.toString()}
                          ></Pix>
                        )
                      )}
                  </tr>
                      )
                  )
              }
            </tbody>
          </table>

          <ButtonRefresh
            refresh={this.refresh}
          ></ButtonRefresh>
        </div>

    )
  }
}

export default Matrix;
