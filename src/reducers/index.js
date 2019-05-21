import {
  LOGIN_TEST,
  JOIN_TEST,
  GET_BOOKS_START,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
} from '../actions';

const initialState = ({
  books: [],
  asyncAction: false,
  error: '',
});

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
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
    case JOIN_TEST:
      return state;
    case LOGIN_TEST:
      return state;
    default:
      return state;
  }
};

export default rootReducer;
