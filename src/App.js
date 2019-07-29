import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import AuthPage from './components/authPage';
import MainPage from './components/mainPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component = {AuthPage} />
      <Route path="/userInterface" component = {MainPage} />
    </Switch>
  );
}


export default App;
