import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import { loginAction, joinAction, authenticate } from '../../actions';
import Login from './Login';
import Join from './Join';
import style from './AuthForm.module.scss';

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
    return this.props.auth ? <Redirect to='/' /> : (
        <div className={style.AuthForm}>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/join'>Join</NavLink>
        {
          this.props.match.path === '/login'
            ? (
                <>
                  <Login
                    username={username}
                    password={password}
                    action='login'
                    handleOnChange={this.handleOnChange}
                    handleAuth={this.props.authenticate}
                  />
                </>
              )
            : (
              <>
                <Join
                  username={username}
                  password={password}
                  action='register'
                  handleOnChange={this.handleOnChange}
                  handleAuth={this.props.authenticate}
                />
              </>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { authenticate })(AuthForm);
