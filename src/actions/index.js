import axios from "axios";

// const baseEndpoint = 'http://localhost:3500/api';
const baseEndpoint = 'https://lambda-bookr.herokuapp.com/api';

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
      console.log(data);
    })
    .catch(({ response }) => {
      console.log(cleanError(response));
    });
}


export const LOGIN_TEST = 'LOGIN_TEST';
export const JOIN_TEST = 'JOIN_TEST';

export const joinAction = () => dispatch => {
  dispatch({
    type: JOIN_TEST,
    payload: 'abc',
  });
  localStorage.setItem('authToken', 'abc');
};

export const loginAction = () => dispatch => {
  dispatch({
    type: LOGIN_TEST,
    payload: 'abc',
  });
  localStorage.setItem('authToken', 'abc');
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

// Auth Actions
export const checkAuth = () => dispatch => {
  if (localStorage.getItem('authToken')) {
    dispatch({
      type: LOGIN_SUCCESS, // TODO: Refactor this to AUTH_SUCCESS?
      payload: localStorage.getItem('authToken'),
    });
  }
}

export const LOGOUT_START = 'LOGOUT_START';
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_START,
  });
  localStorage.removeItem('authToken');
}

export const GET_COMMENTS_START = 'GET_COMMENTS_START';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL';

export const getComments = () => dispatch => {
  dispatch({
    type: GET_COMMENTS_START,
  });

  axios
    .get(`${baseEndpoint}/reviews`)
    .then(({ data }) => {
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: data,
      });
    })
    .catch();
}
