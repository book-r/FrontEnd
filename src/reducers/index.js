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

  SUBMIT_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  EDIT_REVIEW_SUCCESS,
  SUBMIT_REVIEW_FAIL,

  REMOVE_ERROR,
} from '../actions';

const initialState = ({
  books: [],
  asyncAction: false,
  error: '',
  bookDetail: {
    reviews: [],
    authors: [],
  },
  relatedBooks: [],
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
    case SUBMIT_REVIEW_START: 
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
          user_review: action.payload,
          reviews: [
            ...state.bookDetail.reviews,
            action.payload,
          ]
        }
      };
    case EDIT_REVIEW_SUCCESS:
      return {
        ...state,
        asyncAction: false,
        bookDetail: {
          ...state.bookDetail,
          reviews: state.bookDetail.reviews.map(review => {
            return review.id === action.payload.id ? action.payload : review;
          }),
        }
      }
    case SUBMIT_REVIEW_FAIL:
      return {
        ...state,
        asyncAction: false,
        error: action.payload,
      };

    case REMOVE_ERROR:
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }

};

export default rootReducer;
