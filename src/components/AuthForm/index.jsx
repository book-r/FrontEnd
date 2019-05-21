import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { loginAction, joinAction } from '../../actions';
import Login from './Login';
import Join from './Join';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { username, password } = this.state;
    const { loginAction, joinAction } = this.props;
    return (
      <div className='AuthForm'>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/join'>Join</NavLink>
        {
          this.props.match.path === '/login'
            ? (
                <>
                  <Login
                    username={username}
                    password={password}
                    handleOnChange={this.handleOnChange}
                    action={loginAction}
                  />
                </>
              )
            : (
              <>
                <Join
                  username={username}
                  password={password}
                  handleOnChange={this.handleOnChange}
                  action={joinAction}
                />
              </>
            )
        }
      </div>
    );
  }
}
 
export default connect(null, { loginAction, joinAction })(AuthForm);
