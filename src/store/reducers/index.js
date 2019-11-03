import { combineReducers } from 'redux';

import { loginReducer  as session } from './login';
import { episodesReducer as episodes } from './episodes';
import { charactersReducer as characters } from './characters';

export const rootReducer = combineReducers({
  session,
  episodes,
  characters,
});

console.log(rootReducer)

export default rootReducer;