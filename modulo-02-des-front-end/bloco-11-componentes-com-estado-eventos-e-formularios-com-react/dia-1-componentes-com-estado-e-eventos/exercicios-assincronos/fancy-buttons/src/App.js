import React, { Component } from 'react';

// Exr Fixando conteúdo 1 e 2.
/*
const handleClickOne = () => {
  console.log('Clicou no botão 1!');
}

const handleClickTwo = () => {
  console.log('Clicou no botão 2!');
}

const handleClickThree = () => {
  console.log('Clicou no botão 3!');
}

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={ handleClickOne }>Meu Botão 1</button>
        <button onClick={ handleClickTwo }>Meu Botão 2</button>
        <button onClick={ handleClickThree }>Meu Botão 3</button>
      </div>
    );
  }
}

export default App;
*/

// Exr Fixando conteúdo 3 e 4.
/*
class App extends Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    console.log('"this" do botão 1 :', this);
  }

  handleButtonTwo() {
    console.log('"this" do botão 2 :', this);
  }

  handleButtonThree() {
    console.log('"this" do botão 3 :', this);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleButtonOne}>Botão 1</button>
        <button onClick={this.handleButtonTwo}>Botão 2</button>
        <button onClick={ this.handleButtonThree }>Botão 3</button>
    </div>
    );
  }
}

export default App;

// Exr Fixando conteúdo 5.
// Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!

this.state = {
  clicksBtnOne: 0,
  clicksBtnTwo: 0,
  clicksBtnThree: 0,
};

// Exr Fixando conteúdo 6.
// Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.

class App extends React.Component {
constructor() {
  super();

  this.handleButtonOne = this.handleButtonOne.bind(this);
  this.handleButtonTwo = this.handleButtonTwo.bind(this);
  this.handleButtonThree = this.handleButtonThree.bind(this);

  this.state = {
    clicksBtnOne: 0,
    clicksBtnTwo: 0,
    clicksBtnThree: 0,
  };
}

handleButtonOne() {
  this.setState(() => ({
    clicksBtnOne: 1,
  }));
}

handleButtonTwo() {
  this.setState(() => ({
    clicksBtnTwo: 1,
  }));
}

handleButtonThree() {
  this.setState(() => ({
    clicksBtnThree: 1,
  }));
}

  render() {
  return (
    <div>
      <button onClick={ this.handleButtonOne }>Botão 1</button>
      <button onClick={ this.handleButtonTwo }>Botão 2</button>
      <button onClick={ this.handleButtonThree }>Botão 3</button>
    </div>
  );
}
}

export default App;

// Exr Fixando conteúdo 7.
// Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

class App extends React.Component {
constructor() {
  super();

  this.handleButtonOne = this.handleButtonOne.bind(this);
  this.handleButtonTwo = this.handleButtonTwo.bind(this);
  this.handleButtonThree = this.handleButtonThree.bind(this);

  this.state = {
    clicksBtnOne: 0,
    clicksBtnTwo: 0,
    clicksBtnThree: 0,
  };
}

handleButtonOne() {
  this.setState((prevState) => ({
    clicksBtnOne: prevState.clicksBtnOne + 1,
  }));
}

handleButtonTwo() {
  this.setState((prevState) => ({
    clicksBtnTwo: prevState.clicksBtnTwo + 1,
  }));
}

handleButtonThree() {
  // A única coisa diferente é a desconstrução.
  // Apenas um método diferente de fazer a mesma coisa
  // do que foi feito nas funções anteriores.
  this.setState(({ clicksBtnThree }) => ({
    clicksBtnThree: clicksBtnThree + 1,
  }));
}

render() {
  return (
    <div>
      <button onClick={ this.handleButtonOne }>Botão 1 | Count = {this.state.clicksBtnOne}</button>
      <button onClick={ this.handleButtonTwo }>Botão 2 | Count = {this.state.clicksBtnTwo}</button>
      <button onClick={ this.handleButtonThree }>Botão 3 | Count = {this.state.clicksBtnThree}</button>
    </div>
  );
}
}

export default App;

// Exr Fixando conteúdo 8.
// Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.

class App extends React.Component {
constructor() {
  super();

  this.state = {
    clicksBtnOne: 0,
    clicksBtnTwo: 0,
    clicksBtnThree: 0,
  };

  this.handleButtonOne = this.handleButtonOne.bind(this);
  this.handleButtonTwo = this.handleButtonTwo.bind(this);
  this.handleButtonThree = this.handleButtonThree.bind(this);
}

handleButtonOne() {
  this.setState(({ clicksBtnOne }) => ({
    clicksBtnOne: clicksBtnOne + 1,
  }));
}

handleButtonTwo() {
  this.setState(({ clicksBtnTwo }) => ({
    clicksBtnTwo: clicksBtnTwo + 1,
  }));
}

handleButtonThree() {
  this.setState(({ clicksBtnThree }) => ({
    clicksBtnThree: clicksBtnThree + 1,
  }));
}

// Para essa função, não precisamos utilizar o bind porque ela é utilizada
// apenas dentro do contexto do componente App
getButtonColor(num) {
  // Essa função contém um ternário que realiza a lógica para mudarmos
  // a cor do botão para verde quando for um número par
  return num % 2 === 0 ? 'green' : 'white';
}

render() {
  const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
  return (
    <div>
      <button
        onClick={ this.handleButtonOne }
        // Para renderizarmos as cores, precisamos acrescentar a função
        // que contém a nossa lógica ao "inline style", passando o estado
        // correspondente como parâmetro
        style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
      >
        Botão 1 | Count = { clicksBtnOne }
      </button>
      <button
        onClick={ this.handleButtonTwo }
        style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
      >
        Botão 2 | Count = { clicksBtnTwo }
      </button>
      <button
        onClick={ this.handleButtonThree }
        style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
      >
        Botão 3 | Count = { clicksBtnThree }
      </button>
    </div>
  );
}
}

export default App;

// Exr Fixando conteúdo 9.
// A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!

class App extends React.Component {
constructor() {
  super();

  this.state = {
    clicksBtnOne: 0,
    clicksBtnTwo: 0,
    clicksBtnThree: 0,
  };

  this.handleButtonOne = this.handleButtonOne.bind(this);
  this.handleButtonTwo = this.handleButtonTwo.bind(this);
  this.handleButtonThree = this.handleButtonThree.bind(this);
}

handleButtonOne() {
  this.setState(({ clicksBtnOne }) => ({
    clicksBtnOne: clicksBtnOne + 1,
  }), () => {
    console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`);
  });
}

handleButtonTwo() {
  this.setState(({ clicksBtnTwo }) => ({
    clicksBtnTwo: clicksBtnTwo + 1,
  }), () => {
    console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtnTwo)}`);
  });
}

handleButtonThree() {
  this.setState(({ clicksBtnThree }) => ({
    clicksBtnThree: clicksBtnThree + 1,
  }), () => {
    // Aqui imprimimos a cor no console após o setState atualizar
    // a quantidade de clicks no botão
    console.log(`Botão 3 ${this.getButtonColor(this.state.clicksBtnThree)}`);
  });
}

getButtonColor(num) {
  return num % 2 === 0 ? 'green' : 'white';
}

render() {
  const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
  return (
    <div>
      <button
        onClick={ this.handleButtonOne }
        style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
      >
        Botão 1 | Count = { clicksBtnOne }
      </button>
      <button
        onClick={ this.handleButtonTwo }
        style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
      >
        Botão 2 | Count = { clicksBtnTwo }
      </button>
      <button
        onClick={ this.handleButtonThree }
        style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
      >
        Botão 3 | Count = { clicksBtnThree }
      </button>
    </div>
  );
}
}

export default App;

*/

class App extends Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave "state" do "this", ou seja, ao "this.state"*/
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }
  // state = {};

  handleClick() {
     /* Você **NUNCA** deve fazer atribuições diretamente a "this.state". Deve,
    ao invés disso, SEMPRE utilizar a função "this.setState(novoEstado)" do
    React*/
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    /*Para LER o estado, você pode usar "this.state.chaveDoMeuEstado"*/
    // console.log(this)
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;

// OBS.: Para essa pequena e simples aplicação de ter um botão que clicamos e ele atualiza o número de cliques que foi dado dentro dele, tivemos que saber:
/*
1) Estado;
2) Eventos;
3) Fazer bind;
4) E tivemos que saber que o Estado é assíncrono e como que atualizamos um Estado, usando como base o Estado anterior.
*/
// SABER ESTADO E EVENTOS É O CORAÇÃO DO REACT!!! ESSE É O PODER!!! Os outros assuntos adiante no módulo de Front, são praticamente acessórios destes.