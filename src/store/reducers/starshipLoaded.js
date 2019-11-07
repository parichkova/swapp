import * as actionTypes from '../actions/actionTypes';

export function starshipLoadedReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_STARSHIP_SUCCESS:
      return {
        ...state,
        starshipLoaded: action.starshipLoaded,
      };
    case actionTypes.LOAD_STARSHIP_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getStarshipLoaded = (state) => state.starshipLoaded;
