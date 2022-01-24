// Exemplos conteúdo "PROPS" (https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/e80237ee-27b0-4e38-9941-c3ad4a18509c/props/28421cea-ea60-417c-aa28-99c3c48ddbfc?use_case=side_bar)
/*
import staringCat from './staringCat.jpg';
import Image from './Image';

function App() {
  return (
    <main className='cat'>
      <Image source={staringCat} alternativeText='Cute cat staring' />
    </main>
  );
}

export default App;
*/

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

/*
// Exemplos conteúdo "COMPOSIÇÃO DE COMPONENTES" (https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/e80237ee-27b0-4e38-9941-c3ad4a18509c/composicao-de-componentes/3936c3ed-4658-48b4-a5b9-ed93f11ce78a?use_case=side_bar)
// arquivo App.js, criado pelo create-react-app, modificado: "Arquivo UserProfile"
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <div className="App">
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    );
  }
}

export default App;
// Analisando o código acima, temos:
// O componente App é composto por dois componentes UserProfile . Em outras palavras, o componente App é pai dos dois componentes UserProfile . Além disso, <UserProfile user={joao} /> e <UserProfile user={amelia} /> são componentes irmãos , e eles dois são filhos do componente App .
// O componente UserProfile , por sua vez, possui um componente Image . Ou seja, UserProfile tem Image como filho.
// Os dados são repassados de componente pai para componente(s) filho(s). Olhando para o código acima, o componente App , que é pai dos dois componentes UserProfile , passa para cada um de seus filhos um objeto com as informações de um perfil. O mesmo pode ser dito olhando para UserProfile , que passa para seu componente filho Image a origem de uma imagem.
*/

// Agora, realize este exercício de fixação (Ainda sobre "COMPOSIÇÃO DE COMPONENTES"):
// Suponha que você abra uma aplicação React e se depare com os seguintes componentes: "arquivo Order.js"
// Crie os componentes dentro do diretório src do projeto assinc-exercises-10-2 , para poder fazer o exercício a seguir.
// Agora, responda ao seguinte, no que diz respeito à composição de componentes:
// O que o componente App é em relação a Order ?
// R.: App é o componente pai .

// Complete o código de forma que os pedidos referentes aos produtos "headphone" e "energyDrink" sejam filhos de App .
/*
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars",
      },
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars",
      },
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
        <!-- adicione os componentes aqui -->
        <Order order={headphone} />
        <Order order={energyDrink} />
      </div>
    );
  }
}

export default App;
*/

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

// Exemplos conteúdo "LISTA DE COMPONENTES E CHAVES" (https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/e80237ee-27b0-4e38-9941-c3ad4a18509c/lista-de-componentes-e-chaves/c557f0df-fdc4-4e9d-a787-e4545030eea6?use_case=next_button)
/*
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <div className="App">
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    );
  }
}

export default App;
*/
// O componente App possui dois componentes UserProfile como filho. Que tal gerar esses componentes filhos dinamicamente? Isso poderia ser feito da seguinte forma:
// arquivo App.js, criado pelo create-react-app, modificado
/*
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {users.map(user => <UserProfile user={user} />)}
      </div>
    );
  }
}

export default App;
*/
// Entretanto, a geração dinâmica dos componentes está incompleta, haja vista que é preciso passar uma key para "UserProfile" . Você pode averiguar isso copiando o código acima e entrando no console do Google Chrome , que lá vai estar presente um warning levantado pelo React .
// Dito isso, altere a chamada do componente de "UserProfile" de forma que a lista seja gerada dinamicamente de maneira adequada.
// arquivo App.js, criado pelo create-react-app, modificado
/*
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {users.map(user => <UserProfile key={user.id} user={user} />)}
      </div>
    );
    // Como boa prática utilizamos a chave `id` do objeto como nossa key por ser única, caso ela não existisse, precisarímos utilizar o `index` como segundo parâmetro do map.
  }
}

export default App;
*/

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

// Exemplos conteúdo "PROPTYPES, CHECAGEM DE TIPOS" (https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/e80237ee-27b0-4e38-9941-c3ad4a18509c/proptypes-checagem-de-tipos/de0f34ac-c606-4217-a738-d16a245da6a4?use_case=next_button)

