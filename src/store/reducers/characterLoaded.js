import * as actionTypes from '../actions/actionTypes';

export function characterLoadedReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_CHARACTER_SUCCESS:
      return {
        ...state,
        characterLoaded: action.characterLoaded,
      };
    case actionTypes.LOAD_CHARACTER_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getCharacterLoaded = (state) => state.characterLoaded;
