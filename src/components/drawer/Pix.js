import React from 'react';
import './Pix.css'

class Pix extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      color : 'black'
    };
    this.isCliked = this.isCliked.bind(this);
  }

  isCliked = (event) => {
   this.setState((prevState, { count, color }) => ({
     count: prevState.count + 1,
     color : 'red'
   }));
   const pixel = document.getElementsByClassName('valuePix');
   pixel[0].innerHTML = `<p> ${this.state.count} </p>`;
   //alert(`You cliked me ${this.state.count} times`);
 }

   render(){
     return (
    <div className="pix" onClick={(e) => this.isCliked(e)}>
      <p className="valuePix"> 0 </p>
    </div>
  )
  }
}

export default Pix;
