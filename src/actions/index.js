import axios from "axios";

const baseEndpoint = 'http://localhost:3500/api';

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
      // handle cases where error isn't handled properly server side
      const message = response.data.message ? response.data.message : `${response.status} ${response.statusText}`;
      dispatch({
        type: GET_BOOKS_FAIL,
        payload: message,
      });
    });
}
