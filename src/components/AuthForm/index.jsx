import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  render() { 
    return (
      <h3>Auth Form</h3>
    );
  }
}
 
export default AuthForm;
