import {
  LOGIN_TEST,
  JOIN_TEST,
  GET_BOOKS_START,
  GET_BOOKS_SUCCESS,
} from '../actions';

const initialState = ({
  books: [],
});

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_BOOKS_START:
      return state;
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    case JOIN_TEST:
      return state;
    case LOGIN_TEST:
      return state;
    default:
      return state;
  }
};

export default rootReducer;
