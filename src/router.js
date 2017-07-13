import { Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import history from './history';
import Login from './scenes/Login';
import Dashboard from './scenes/Dashboard';
import NotFound from './scenes/NotFound';
import App from './components/App';
import RequireAuth from './components/RequireAuth';

const CustomRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/dashboard" component={RequireAuth(Dashboard)} />
      <Route path="/login" component={Login} />
      <Route path="/test" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default CustomRouter;
