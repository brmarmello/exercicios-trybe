// import logo from './logo.svg';
import React from 'react';
import './App.css';
import pokemons from './data';
// Import do json criado com os pokemons e seus dados.
import Pokedex from './Pokedex';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
    // No arquivo App.js, estamos renderizando o componente da Pokedex.
    // Criamos a prop "pokemons", e nela chamamos o nosso json "pokemons",
    // pokemons={} é a nossa prop e o valor dentro das {} é o nosso json,
    // ou seja nomeDaProps={valorDaProps}, o nome da props é o que foi passado
    // dentro do componente Pokedex.
    // O valor da props, vem o import que fizemos na linha 3 do arquivo data.js
    // pois desta forma poderemos trabalhar com esses dados via "props".
    // Uma informação importante é que podemos dar qualquer nome a uma prop,
    // mas atente-se para que seja um nome descritivo.
  }
}

export default App;

// E aí, conseguiu dar o primeiro passo, mas ainda se sente perdido
// Tente isso:
// arquivo ./my-pokedex/src/Pokedex.js:
// E isso:
// arquivo ./my-pokedex/src/Pokemon.js :

// Chegamos na parte final do exercício! Não se preocupe se foi preciso olhar o gabarito para visualizar o que precisava ser feito! Mas não se esqueça de refazer o exercício para fixar o conteúdo!
// Caso você não queira se aventurar no css , deixamos um pronto pra você! ;)
// arquivo ./my-pokedex/src/App.css :
// arquivo ./my-pokedex/src/index.css :
