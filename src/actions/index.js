import axios from "axios";

const baseEndpoint = 'http://localhost:3500/api';

const cleanError = (response) => {
  // handle cases where error isn't handled properly server side
  return response.data.message ? response.data.message : `${response.status} ${response.statusText}`;
}

// Login Actions
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = (credentials) => dispatch => {
  dispatch({
    type: LOGIN_START,
  });
  axios
    .post(`${baseEndpoint}/auth`, credentials)
    .then(({ data }) => {
      console.log(data);
      // TODO: Store token in local storage and send dispatch to updated logged in status on state
    })
    .catch(({ response }) => {
      console.log(cleanError(response));
    });
}

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


// Catalog Actions
export const GET_BOOKS_START = 'GET_BOOKS_START';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAIL = 'GET_BOOKS_FAIL';

export const getBooks = () => dispatch => {
  dispatch({
    type: GET_BOOKS_START,
  });
  axios
    .get(`${baseEndpoint}/books`)
    .then(({ data }) => {
      dispatch({
        type: GET_BOOKS_SUCCESS,
        payload: data,
      });
    })
    .catch(({ response }) => {
      
      const message = cleanError(response);
      dispatch({
        type: GET_BOOKS_FAIL,
        payload: message,
      });
    });
}
