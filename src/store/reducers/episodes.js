import * as actionTypes from '../actions/actionTypes';

export function episodesReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: action.data.edges,
      };
    case actionTypes.LOAD_EPISODES_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getEpisodes = (state) => state.episodes;
