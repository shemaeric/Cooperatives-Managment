import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-up" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
