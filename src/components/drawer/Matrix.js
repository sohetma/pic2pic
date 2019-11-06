import React from 'react';
import Pix from './Pix.js';
import './Pix.css';
import './Matrix.css'
import './ButtonRefresh.css';
import FunctionalityDrawer from './FunctionalityDrawer.js'


class Matrix extends React.Component{

  constructor(props) {
    super(props);

    //console.log(this.updateGrid(this.createTable(10),1,2))

    this.state = {
      matrix : this.createTable(64),
      saved : this.createTable(64),
      status :"mouseUp"
    };

    // console.log(this.freshGrid());
    // console.log(this.state.matrix);
    // console.log(this.updateGrid(1,1));
    // console.log(this.refresh());
  }



  createTable = dim => {
    //console.log(' I m in createTable')
    let grid = [];
    for (let j = 0; j < dim ; j++){
      grid[j] = new Array(dim).fill(0); // new pixel(false, "white")
    }
    return grid;
    // const ruler = new Array(dim).fill("-Pixel-");
    // return ruler.map(x => ruler.map(y => 0));
  }

  freshGrid = () => {
    //console.log('I m in fresh grid');
    return this.createTable(64);
  }

  gomme = (x,y) => {
    let gommeMyGrid = this.state.matrix;

    if(this.state.matrix[x][y] !== 0){
      gommeMyGrid[x][y] = 0;
      this.props.theColor = 'white';
    }

    this.setState({
      matrix : gommeMyGrid
    })
  }

  save = () => {
    let saveTheGrid = this.state.matrix;

    this.setState({
      saved : saveTheGrid
    })

    return saveTheGrid;
  }


  draftBack = () => {
    let draftBack = this.state.saved;
    console.log('draft', draftBack);

    this.setState({
      matrix : draftBack
    })
  }


  updateGrid = (x, y) => {
    let updateMyGrid = this.state.matrix;

    if(this.state.matrix[x][y] !== 0){
      return;
    }

    for (let i = 0 ; i < this.props.choiceColor.length ; i++){
      if(this.props.theColor === this.props.choiceColor[i]) {
        updateMyGrid[x][y] = this.props.theColor;
      }
    }

    //console.log('I m in update');
    console.log(updateMyGrid);
    //return updateMyGrid;

    this.setState({
        matrix: updateMyGrid,
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

          <FunctionalityDrawer refresh={this.refresh} saveTheDraw={this.save} draftBack={this.draftBack} />
        </div>

    )
  }
}

export default Matrix;
