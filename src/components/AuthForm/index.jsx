import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import { authenticate, removeError } from '../../actions';
import Login from './Login';
import Join from './Join';
import style from './AuthForm.module.scss';
import { toast } from 'react-toastify';

class AuthForm extends Component {
  state = {
    username: '',
    password: '',
  }

  componentDidMount() {
    // toast('Toasty');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.error) {
      setTimeout(() => {
        this.props.removeError();
      }, 330);
      toast.error(this.props.error);
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
    const activeStyle = {
      borderBottom: '1px solid #FCFCFC',
      background: '#FCFCFC',
      cursor: 'inherit',
    };

    return this.props.auth ? <Redirect to='/' /> : (
      <div className={style.AuthForm}>
        <div className={style.AuthForm__wrapper} style={ this.props.error ? { animation: `${style.shake} 0.33s`} : null }>
          <nav className={style.AuthForm__nav}>
            <NavLink activeStyle={activeStyle} className={style.AuthForm__nav__login} to='/login'>Login</NavLink>
            <NavLink activeStyle={activeStyle} className={style.AuthForm__nav__join} to='/join'>Sign Up</NavLink>
          </nav>
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
      </div>
    );
  }
}

const mapStateToProps = ({ auth, error }) => ({
  auth,
  error,
});

export default connect(mapStateToProps, { authenticate, removeError })(AuthForm);
