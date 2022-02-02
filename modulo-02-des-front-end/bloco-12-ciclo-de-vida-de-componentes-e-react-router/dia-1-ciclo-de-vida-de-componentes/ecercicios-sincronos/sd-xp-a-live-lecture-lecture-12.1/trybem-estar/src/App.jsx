import React from 'react';
import './App.css';
import logo from './assets/trybemestar.png';
import Timer from './components/Timer';

// [X] - Adicionar um botão para esconder e mostrar o nosso timer ⏰ ✅
// [X] - Fazer um cronômetro que vai de 0 a 5, infinitas vezes. ✅
// [X] - Adicionar as 3 fases ✅

class App extends React.Component {
  state = {
    showTimer: false,
  }

  // ! Se for true => false
  // ! Se for false => true
  toggleTimer = () => {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }));
  }

  render() {
    const { showTimer } = this.state;
    return (
      <div>
        <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        {
          showTimer && <Timer />
        }
        <button type="button" onClick={ this.toggleTimer }>
          {
            showTimer ? 'Esconder Timer' : 'Mostrar Timer'
          }
        </button>
      </div>
    );
  }
}
// Condicao ? caso seja verdadeiro : caso seja falso
export default App;
