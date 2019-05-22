import {
  GET_BOOKS_START,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  
  GET_BOOK_SUCCESS,
  GET_BOOK_FAIL,
  GET_BOOK_START,
  
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_REMOVE,

  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAIL,
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
      };

    // AUTH REDUCERS
    case AUTH_START:
      return {
        ...state,
        asyncAction: action.type,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        asyncAction: false,
        auth: true,
        user: action.payload,
      };
    case AUTH_FAIL:
      return {
        ...state,
        asyncAction: false,
        auth: false,
        error: action.payload,
      };
    case AUTH_REMOVE:
      return {
        ...state,
        auth: false,
      };

    // BOOK REDUCERS
    case GET_BOOK_START:
      return state;
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        bookDetail: action.payload,
      };
    case GET_BOOK_FAIL:
      return state;

    // REVIEW REDUCERS
    case ADD_REVIEW_START: 
      return {
        ...state,
        asyncAction: action.type,
      };
    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        asyncAction: false,
        bookDetail: {
          ...state.bookDetail,
          reviews: [
            ...state.bookDetail.reviews,
            action.payload,
          ]
        }
      };
    case ADD_REVIEW_FAIL:
      return {
        ...state,
        asyncAction: false,
        error: action.payload,
      };

    default:
      return state;
  }

};

export default rootReducer;
