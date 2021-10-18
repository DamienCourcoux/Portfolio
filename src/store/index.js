import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/store/reducer';

import projectMiddleware from './middlewares/projectMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    projectMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
