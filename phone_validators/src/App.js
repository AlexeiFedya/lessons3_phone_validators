import React from 'react';
import { validate } from './Validate';
import './task.css';

// function validate(phone) {
//   let result = phone.match(/\+375/);
//   let result1 = phone.match(/\+375(?=29|44|25|33)/);
//   console.log(result1)
//   return {
//     phone: phone.length === 4 && !result || phone.length > 4 && !result1 
//   };
// }


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
    };
  }

  handlePhoneChange = evt => {
    this.setState({ phone: evt.target.value });
  };

  render() {
    const isValidPhone = validate(this.state.phone);

    return (
      <div id="task-wraper">
        <input
          className={isValidPhone || this.state.phone === "" ? "success" : "error"}
          type="text"
          placeholder="Enter your phone"
          maxLength="13"
          value={this.state.phone}
          onChange={this.handlePhoneChange}
        />
        
      </div>
    );
  }
}
