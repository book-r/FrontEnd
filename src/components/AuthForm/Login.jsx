import React from 'react';

const Login = (props) => {
  const {
    username,
    password,
    action,
    handleOnChange,
  } = props;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // TODO: pass username and password to action
    console.log(username, password);
    action();
  }
  
  return (
    <>
      <h3>Please Login</h3>
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
