import * as actionTypes from '../actions/actionTypes';

export function themeReducer(state = true, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        isLightTheme: !state.isLightTheme,
      };
    default:
      return state;
  }
}
