import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginScreen } from '../screens/LoginScreen/LoginScreen';

const AppRouter = () => (
  <Router>
    <Route path="/" component={LoginScreen} />
    <Route exact path="/login" render={(props) => <LoginScreen {...props} />} />
  </Router>
);

export default AppRouter;