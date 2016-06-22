import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from 'components';
import configureStore from './store';

const store = configureStore();

const rootComponent = (
  <Root store={store} />
);

const domMount = document.createElement('div');
document.body.appendChild(domMount);

ReactDOM.render(rootComponent, domMount);
