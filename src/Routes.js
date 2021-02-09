import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Pages/Components
 */
import TinyUrl from './pages/TinyUrl';

const Routes = () => {
  return (
    <Switch>
      {/* Defaut Home Route */}
      <Route exact path="/" component={TinyUrl} />
      <Route exact path="/create" component={TinyUrl} />
    </Switch>
  );
};

export default Routes;
