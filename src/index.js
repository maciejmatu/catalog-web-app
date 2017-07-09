/* globals document */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { Provider } from 'react-redux';

import './styles.scss';
import configureStore from './store';
import Router from './router';

const store = configureStore();

render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router />
    </LocaleProvider>
  </Provider>,
  document.getElementById('app')
);
