import * as actionTypes from '../actions/actionTypes';

export function episodeLoadedReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_EPISODE_SUCCESS:
      return {
        ...state,
        characterLoaded: action.characterLoaded,
      };
    case actionTypes.LOAD_EPISODE_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getEpisodeLoaded = (state) => state.episodeLoaded;
