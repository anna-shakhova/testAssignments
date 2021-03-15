import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const composeEnhancer = (process.env.NODE_ENV === 'production')
  ? applyMiddleware()
  : composeWithDevTools(applyMiddleware());

export const store = createStore(reducer, composeEnhancer);
