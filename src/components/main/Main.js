import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from '../containers/List';
import Survey from '../survey/Survey';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/survey/:id" component={Survey} />
    </Switch>
  </main>
);

export default Main;
