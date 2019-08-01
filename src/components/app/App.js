import React from 'react';
import './App.css';
import Navigation from '../navigation/Navigation';
import SurveyList from '../surveylist/SurveyList';
import Survey from '../survey/Survey';

function App() {
  return (
    <div>
      <Navigation />
      <SurveyList />
      <Survey />
    </div>
  );
}

export default App;
