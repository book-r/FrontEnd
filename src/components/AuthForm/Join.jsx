import React from 'react';

const Join = (props) => {
  const {
    handleOnChange,
    username,
    password,
  } = props;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // TODO: pass props.username and props.password to action
    props.action();
  }

  return (
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
  );
}
 
export default Join;