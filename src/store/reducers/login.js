import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  error: '',
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.session.isLoggedIn,
        error: action.session.error,
      };
    case actionTypes.FETCH_USER_ERROR:
      return {
        ...state,
        isLoggedIn: action.session.isLoggedIn,
        error: action.session.error,
      };
    default:
      return state;
  }
}

export const getIsLoggedIn = (state) => state.session.isLoggedIn;
export const getError = (state) => state.session.error;
