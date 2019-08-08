import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from '../containers/List';
import Form from '../containers/Form';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/survey/:id" component={Form} />
    </Switch>
  </main>
);

export default Main;
