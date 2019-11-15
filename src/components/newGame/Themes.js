import React from 'react';
import './Container.css';


// Composant fonction
class Themes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }


  handleChange= (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit= (event) => {
    //alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p className ='round'>Themes:
            <select className ="list" value={this.state.value} onChange={this.handleChange}>
              <option value="1">Sport</option>
              <option value="2">Food</option>
              <option value="3">Travel</option>
          </select>
          </p>
        </label>
      </form>
    );
  }
}

      
  export default Themes
