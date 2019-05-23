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
    handleAuth({
      username,
      password,
    }, action);
  }
  
  return (
    <>
      <form className={style.AuthForm__form} onSubmit={handleOnSubmit}>
        <input
          className={style.AuthForm__form__text}
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={handleOnChange}
          />
        <input
          className={style.AuthForm__form__text}
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={handleOnChange}
        />
        <input
          className={style.AuthForm__form__submit}
          type='submit'
          value='Login'
        />
      </form>
    </>
  );
}
 
export default Login;
