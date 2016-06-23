import { applyMiddleware, compose, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';

import rootReducer from '../reducers';

export default function configureStore() {
  const middleware = compose(
    // applyMiddleware(createLogger()),
    applyMiddleware(reduxPromise),
    applyMiddleware(thunk)
  );

  const store = createStore(
    rootReducer,
    middleware
  );

  return store;
}
