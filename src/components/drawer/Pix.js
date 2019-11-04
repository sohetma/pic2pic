import React from 'react';
import './Pix.css'

class Pix extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      painted : false
    };
    this.isCliked = this.isCliked.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }


  handleMouseEnter= () => {
      this.setState({ painted : true});
  }


  isCliked = (event) => {
   this.setState((prevState, { count }) => ({
     count: prevState.count + 1,
   }));
   const pixel = document.getElementsByClassName('pixel');
   pixel[0].innerHTML = `<td> ${this.state.count} </td>`;
   //alert(`You cliked me ${this.state.count} times`);
 }

   render(){
     return <td
              onMouseEnter={this.props.hovered === "mouseDown" ? this.handleMouseEnter: undefined}
              style={{
                backgroundColor: this.state.painted ? 'black' : 'white'
              }}
              className="pixel"
              >
            </td>

        //    <div className="pix" onClick={(e) => this.isCliked(e)}>
        //      <p className="valuePix"> 0 </p>
        //    </div>



  }
}

export default Pix;
