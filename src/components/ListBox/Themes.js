import React from 'react'

    class Themes extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: '1'};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          alert('Your favorite flavor is: ' + this.state.value);
          event.preventDefault();
        }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
              <p className ='themes'>Thèmes:
              <select className ="list"value={this.state.value} onChange={this.handleChange}>
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