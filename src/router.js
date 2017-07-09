import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Login from './scenes/Login';
import Dashboard from './scenes/Dashboard';
import App from './components/App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
