import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Taz',
      password: '',
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('credentials:', {...this.state});
    // Handle Login Auth
  };

  handleOnChange = (event) => {
    console.log(event.target.name);
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { username, password } = this.state; 
    return (
      <div className='AuthForm'>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={this.handleOnChange}

            />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={this.handleOnChange}
          />
          <input
            type='submit'
            value='Login'
          />
        </form>
      </div>
    );
  }
}
 
export default AuthForm;
