import axios from "axios";
import auth from '../helpers/auth';

// const baseEndpoint = 'http://localhost:3500/api';
const baseEndpoint = 'https://lambda-bookr.herokuapp.com/api';

const cleanError = (response) => {
  // handle cases where error isn't handled properly server side
  return response.data.message ? response.data.message : `${response.status} ${response.statusText}`;
}

// Auth Actions
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export const authenticate = (credentials, action) => dispatch => {
  dispatch({
    type: AUTH_START,
  });

  axios
    .post(`${baseEndpoint}/auth/${action}`, credentials)
    .then(({ data }) => {
      const { token } = data;
      auth.add(token);
      dispatch({
        type: AUTH_SUCCESS,
        payload: token,
      });
    })
    .catch(({ response }) => {
      console.log(cleanError(response));
    });
}

export const checkAuth = () => dispatch => {
  if (auth.get()) {
    dispatch({
      type: AUTH_SUCCESS,
      payload: auth.get(),
    });
  }
}

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

// Book Detail Actions
export const GET_BOOK_START = 'GET_BOOK_START';
export const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
export const GET_BOOK_FAIL = 'GET_BOOK_FAIL';
export const getBook = id => dispatch => {
  dispatch({
    type: GET_BOOK_START,
  });
  
  return axios
    .get(`${baseEndpoint}/books/${id}`)
    .then(({ data }) => {
      dispatch({
        type: GET_BOOK_SUCCESS,
        payload: data,
      });
    })
    .catch(({ response }) => {
      console.log(cleanError(response));
    });
}

export const LOGOUT_START = 'LOGOUT_START';
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_START,
  });
  localStorage.removeItem('authToken');
}
