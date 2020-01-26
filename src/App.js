import React from 'react';
import { Switch, Route } from "react-router-dom";

import LoginContainer from './components/login/LoginContainer'
import SignupContainer from './components/signup/SignupContainer'

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
         
        </Switch>
   
      </div>
    );
  }
}

export default App;