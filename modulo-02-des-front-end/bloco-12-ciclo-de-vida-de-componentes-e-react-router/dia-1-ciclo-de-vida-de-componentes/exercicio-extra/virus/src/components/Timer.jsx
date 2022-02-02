import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    
    this.state = {
      counter: 0,
      phases: ['Respira', 'Segura', 'Expira'],
      currentPhase: 0,
    }
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prev) => ({counter: prev.counter + 1}))
    }, 1000)
  }

  componentDidUpdate(_, prevState) {
    if (prevState.counter === 5) {
      this.setState((prev) => {
        const counter = {
          counter: 0,
          currentPhase: prev.currentPhase === 2 ? 0 : prev.currentPhase +1
        }
        return counter;
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { phases, currentPhase, counter } = this.state;
    return (
      <div>
        <h1>{phases[currentPhase]}</h1>
        <p>{counter}</p>
      </div>
    );
  }
}

export default Timer;
