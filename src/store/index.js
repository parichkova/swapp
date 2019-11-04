import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers/index';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  // https://github.com/zalmoxisus/redux-devtools-extension

  // eslint-disable-next-line
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
}

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
  ),
);

export default store;
