import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Login from './scenes/Login';
import Dashboard from './scenes/Dashboard';
import NotFound from './scenes/NotFound';
import App from './components/App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/test" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
