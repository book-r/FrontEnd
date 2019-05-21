import {
  LOGIN_TEST,
  JOIN_TEST,
  GET_BOOKS_START,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions';

const initialState = ({
  books: [],
  asyncAction: false,
  error: '',
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

    // JOIN REDUCERS

    // TEMP TEST CASES
    case JOIN_TEST:
      return state;
    case LOGIN_TEST:
      return state;
    default:
      return state;
  }
};

export default rootReducer;
