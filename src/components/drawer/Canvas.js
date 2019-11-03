import React from 'react';
import matrix from './utils.js'
// Component draw : its here we draw (empty for the moment)
/*const Draw = props => (
  <div className = "scopeDraw">

  </div>
);

export default Draw;
*/



class Canvas extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      arrayInit : matrix
    };
  }

  render(){
    return (
      <div className="Array">
        {matrix}
      </div>
    )
  }




}

export default Canvas;
