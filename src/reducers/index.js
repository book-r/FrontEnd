import {
  GET_BOOKS_START,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_BOOK_SUCCESS,
  GET_BOOK_FAIL,
  GET_BOOK_START,
  LOGOUT_START,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
} from '../actions';

const initialState = ({
  books: [],
  asyncAction: false,
  error: '',
  bookDetail: {
    reviews: []
  },
  user: {
    name: '',
    token: false,
    id: null,
  }
});

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    // CATALOG REDUCERS
    case GET_BOOKS_START:
      return {
        ...state,
        asyncAction: action.type,
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        asyncAction: false,
        books: action.payload,
      };
    case GET_BOOKS_FAIL:
      return {
        ...state,
        asyncAction: false,
        error: action.payload,
      }

    // AUTH REDUCERS
    case AUTH_START:
      return {
        ...state,
        asyncAction: action.type,
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        asyncAction: false,
        auth: true,
      }
    case AUTH_FAIL:
      return {
        ...state,
        asyncAction: false,
        auth: false,
        error: action.payload,
      }

    // LOGIN REDUCERS
    case LOGIN_START:
      return {
        ...state,
        asyncAction: action.type,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        asyncAction: false,
        auth: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        asyncAction: false,
        error: action.payload,
      };

    case GET_BOOK_START:
      return state;
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        bookDetail: action.payload,
      };
    case GET_BOOK_FAIL:
      return state;

    // JOIN REDUCERS

    // TEMP TEST CASES
    case LOGOUT_START:
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
