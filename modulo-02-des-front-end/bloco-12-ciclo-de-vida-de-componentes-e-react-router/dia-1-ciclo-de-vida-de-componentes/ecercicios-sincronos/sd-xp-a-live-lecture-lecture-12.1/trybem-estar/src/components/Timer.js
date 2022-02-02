import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      phases: ['🫁 Inspire...', '😑 Segure...', '😮‍💨Expire...'],
      currentPhase: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    console.log('Iniciar o timer');
    const ONE_SECOND = 1000;
    this.timer = setInterval(
      () => this.setState((prevState) => ({ counter: prevState.counter + 1 })),
      ONE_SECOND,
    );
  }

  // recebo PropsAntigas , EstadoAntigo
  componentDidUpdate(prevProps, prevState) {
    const LAST_PHASE = 2;
    const TIME_LIMIT = 5;

    const { counter, currentPhase: oldPhase } = prevState;

    if (counter === TIME_LIMIT) {
      this.setState({
        counter: 0,
        currentPhase: oldPhase === LAST_PHASE ? 0 : oldPhase + 1,
      });
    }
    console.log('Atualizando o estado do componente');
  }

  componentWillUnmount() {
    console.log('Desmonatando o componente');
    clearInterval(this.timer);
  }

  render() {
    const { counter, phases, currentPhase } = this.state;

    return (
      <section>
        <h1>{phases[currentPhase]}</h1>
        <h2>{counter}</h2>
      </section>
    );
  }
}

export default Timer;
