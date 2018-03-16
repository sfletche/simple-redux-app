import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/main-container';
import './index.css';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from './store';

// Wrap existing app in Provider - Step 2
ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('root')
);
