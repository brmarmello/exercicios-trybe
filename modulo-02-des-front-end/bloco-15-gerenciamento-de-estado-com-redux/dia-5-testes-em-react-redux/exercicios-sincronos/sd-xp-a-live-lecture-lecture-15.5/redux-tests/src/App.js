import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login, Register, Customers } from './pages';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customers" component={ Customers } />
      </Switch>
    );
  }
}

export default App;
