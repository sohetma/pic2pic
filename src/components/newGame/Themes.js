import React from 'react';
import './Container.css';


// Composant fonction
class Themes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange= (event) => {
    this.setState({
      value: event.target.value
    });
    let themeVal = event.target.value;
    console.log('the theme is',themeVal );
    // this.props.update(themeVal);

    // this.props.handleSubmitTheme(event,themeVal);
    // console.log('the theme is', themeVal);
  }

  handleSubmit= (event) => {
    // this.props.changeTheme(event,event.target.value);
    console.log('the theme is still ', event.target.value);
    //alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          <p className ='round'>Themes:
            <select className ="list" value={this.state.value} onChange={(event) => this.handleChange(event)}>
              <option value="sport">Sport</option>
          </select>
          </p>
        </label>
      </form>
    );
  }
}


  export default Themes;
