import axios from "axios";
import axiosWithAuth from '../config/axiosWithAuth';
import auth from '../helpers/auth';

const baseEndpoint = 'https://lambda-bookr.herokuapp.com/api';

const cleanError = (response) => {
  // handle cases where error isn't handled properly server side
  return response.data.message ? response.data.message : `${response.status} ${response.statusText}`;
}

// Auth Actions
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_REMOVE = 'AUTH_REMOVE';

export const authenticate = (credentials, action) => dispatch => {
  dispatch({
    type: AUTH_START,
  });

  axios
    .post(`${baseEndpoint}/auth/${action}`, credentials)
    .then(({ data }) => {
      const { token, username, id, roles } = data;
      console.log('user response', data);
      
      // TODO: Add role here if backend gets to it
      auth.add({
        id,
        username,
        token,
        roles,
      });

      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          id,
          username,
          token,
          roles: roles || [],
        },
      });
    })
    .catch(({ response }) => {
      console.log(cleanError(response));
      console.log(response);
      dispatch({
        type: AUTH_FAIL,
        payload: cleanError(response),
      });
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

export const logout = () => dispatch => {
  dispatch({
    type: AUTH_REMOVE,
  });
  auth.remove();
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
  
  return axiosWithAuth()
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
// export const getBySubject = subject => dispatch => {
//   dispatch({
//     type: GET_BOOKS_START,
//   });

//   axiosWithAuth()
//     .get(`${baseEndpoint}/subjects/${subject}`)
//     .then(({ data }) => {
//       console.log(data);
//     })
//     .catch();
// }

// Admin
export const DELETE_BOOK_START = 'DELETE_BOOK_START';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAIL = 'DELETE_BOOK_FAIL';
export const deleteBook = id => dispatch => {
  dispatch({
    type: DELETE_BOOK_START,
  });

  axiosWithAuth()
    .delete(`${baseEndpoint}/books/${id}`)
    .then(({ data }) => {
      dispatch({
        type: DELETE_BOOK_SUCCESS,
        payload: id,
      });
    })
    .catch(({ response }) => {
      console.log(cleanError(response));
    });
}

// Review Actions
export const SUBMIT_REVIEW_START = 'SUBMIT_REVIEW_START';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const EDIT_REVIEW_SUCCESS = 'EDIT_REVIEW_SUCCESS';
export const SUBMIT_REVIEW_FAIL = 'SUBMIT_REVIEW_FAIL';
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';

export const submitReview = review => dispatch => {
  dispatch({
    type: SUBMIT_REVIEW_START,
  });

  const method = review.id ? 'put' : 'post';
  
  if (!review.id) {
    const { user_id, book_id, rating, comment } = review;
    review = {
      user_id,
      book_id,
      rating,
      comment,
    }
  }
  
  axiosWithAuth()[method](`${baseEndpoint}/reviews${review.id ? `/${review.id}` : ''}`, review)
  .then(({ data }) => {
    dispatch({
      type: !review.id ? ADD_REVIEW_SUCCESS : EDIT_REVIEW_SUCCESS,
      payload: data,
    });
  })
  .catch(({ response }) => {
    console.log(cleanError(response));
  });
}

export const deleteReview = id => dispatch => {
  axiosWithAuth()
    .delete(`${baseEndpoint}/reviews/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_REVIEW_SUCCESS,
        payload: id,
      });
    })
    .catch(({ response }) => {
      console.log(cleanError(response));
    });
};

// Errors
export const REMOVE_ERROR = 'REMOVE_ERROR';
export const removeError = () => dispatch => {
  dispatch({
    type: REMOVE_ERROR,
  });
}
