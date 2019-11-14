import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import reducers from '~/reducers';
import thunk from 'redux-thunk';

export function createRedux(initialState = {}) {
  const middlewares = [
    thunk,
    logger
  ];

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );

  return store;
}