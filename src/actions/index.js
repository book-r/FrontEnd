// Login


// Join

export const LOGIN_TEST = 'LOGIN_TEST';
export const JOIN_TEST = 'JOIN_TEST';

export const joinAction = () => dispatch => {
  dispatch({
    type: JOIN_TEST,
  });
};

export const loginAction = () => dispatch => {
  dispatch({
    type: LOGIN_TEST,
  });
};
