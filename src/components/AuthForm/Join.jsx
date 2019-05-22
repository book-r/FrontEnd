import React from 'react';

const Join = (props) => {
  const {
    handleAuth,
    handleOnChange,
    action,
    username,
    password,
  } = props;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // TODO: pass props.username and props.password to action
    handleAuth({
      username,
      password,
    }, action);
  }

  return (
    <>
      <h3>Please Join</h3>
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
          value='Join'
        />
      </form>
    </>
  );
}
 
export default Join;