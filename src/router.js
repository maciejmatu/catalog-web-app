import { Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import history from './history';
import Login from './scenes/Login';
import Dashboard from './scenes/Dashboard';
import Register from './scenes/Register';
import NotFound from './scenes/NotFound';
import ForgotPassword from './scenes/ForgotPassword';
import RequireAuth from './components/RequireAuth';

const CustomRouter = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/dashboard" component={RequireAuth(Dashboard)} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default CustomRouter;
