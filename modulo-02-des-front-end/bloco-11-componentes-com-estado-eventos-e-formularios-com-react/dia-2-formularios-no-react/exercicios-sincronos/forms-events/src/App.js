import React from 'react';
import logo from './trybe-logo.svg';
import './App.css';
import Login from './components/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={ logo } alt="logo-trybe" srcSet="" />
        </header>
        <main className="app">
          <Login />
        </main>
      </div>
    );
  }
}

export default App;
