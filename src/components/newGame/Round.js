import React from 'react';
import './Container.css';


class Round extends React.Component {
    constructor(props) {
      super(props);

      this.state = {value: '1'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }

    handleSubmit(event) {
      //alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <div className="lobby">
            <p>Lobby</p>
            </div>
            <p className ='round'>Round:
              <select className ="list" value={this.state.value} onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </p>
          </label>
        </form>
      );
    }
  }


  export default Round;
