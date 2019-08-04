import React from 'react';
import './App.css';
import Navigation from '../navigation/Navigation';
import SurveyList from '../surveylist/SurveyList';
import Survey from '../survey/Survey';
import Preview from '../preview/Preview';

function App() {
  return (
    <div>
      <Preview />
      <Navigation />
      <SurveyList />
      <Survey />
    </div>
  );
}

export default App;
