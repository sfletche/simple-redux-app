import { createStore } from 'redux';
import { rootReducer } from './root-reducer';

export function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState);
  return store;
}

export const store = configureStore();
