import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from '../containers/List';
import Form from '../containers/Form';
import Preview from '../containers/Preview';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/survey/:id" component={Form} />
      <Route path="/preview" component={Preview} />
    </Switch>
  </main>
);

export default Main;
