import React, { Component } from 'react';
import Timer from './components/Timer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showTimer: false,
    };

    this.initCounter = this.initCounter.bind(this);
  }

  initCounter() {
    this.setState((prev) => ({ showTimer: !prev.showTimer }))
  }

  render() {
    const { showTimer } = this.state;
    return (
      <div>
        <h1>Teste</h1>
        {
          showTimer && <Timer />
        }
        <button onClick={ this.initCounter }>clique</button>
      </div>
    );
  }
}

export default App;
