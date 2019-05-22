import React from 'react';

import style from './AuthForm.module.scss';

const Login = (props) => {
  const {
    username,
    password,
    action,
    handleAuth,
    handleOnChange,
  } = props;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // TODO: pass username and password to action
    console.log(username, password);
    handleAuth({
      username,
      password,
    }, action);
  }
  
  return (
    <>
      <h3 className={style.Login}>Please Login</h3>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={handleOnChange}
          />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={handleOnChange}
        />
        <input
          type='submit'
          value='Login'
        />
      </form>
    </>
  );
}
 
export default Login;
