import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SurveyList from '../surveylist/SurveyList';
import Survey from '../survey/Survey';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={SurveyList} />
      <Route path="/survey/:id" component={Survey} />
    </Switch>
  </main>
);

export default Main;
