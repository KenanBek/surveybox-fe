import React from 'react';
import './App.css';
import Navigation from '../navigation/Navigation';
import Main from '../main/Main';
import Errors from '../Errors';

function App() {
  return (
    <div>
      <Errors />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
