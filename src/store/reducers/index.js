import { combineReducers } from 'redux';

import { loginReducer as session } from './login';
import { episodesReducer as episodes } from './episodes';
import { charactersReducer as characters } from './characters';
import { characterLoadedReducer as characterLoaded } from './characterLoaded';
import { episodeLoadedReducer as episodeLoaded } from './episodeLoaded';

export const rootReducer = combineReducers({
  session,
  episodes,
  characters,
  characterLoaded,
  episodeLoaded,
});

export default rootReducer;
