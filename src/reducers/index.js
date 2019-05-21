import {
  LOGIN_TEST,
  JOIN_TEST,
} from '../actions';

const initialState = ({
  books: [],
});

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case JOIN_TEST:
      return state;
    case LOGIN_TEST:
      return state;
    default:
      return state;
  }
};

export default rootReducer;
