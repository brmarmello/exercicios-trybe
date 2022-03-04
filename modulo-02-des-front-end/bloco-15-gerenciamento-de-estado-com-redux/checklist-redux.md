# Checklist do React-Redux

*Antes de começar*
- [ ] pensar como será o *formato* do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

*Instalação*
- [ ] npx create-react-app my-app-redux;
- [ ] npm install --save redux react-redux;

*Criar dentro do diretório src:*
- [ ] diretório `store`

**Criar dentro do diretório `store`**
- [ ] arquivo `index.js`
- [ ] diretório `actions`
- [ ] diretório `reducers`

*Criar dentro do diretório `actions`:*
- [ ] arquivo `index.js`.

*Criar dentro do diretório `reducers`:*
- [ ] arquivo `index.js`.

*Criar dentro do arquivo `reducers/index.js`:*
- [ ] estado inicial
- [ ] criar função reducer com `switch` retornando apenas a opção `default`
- [ ] criar `rootReducer` usando o `combineReducers`
- [ ] exportar `rootReducer`

exemplo:

```js
const INITIAL_STATE = {};

const exampleReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   default:
    return state;
 }
}

const rootReducer = combineReducers({ exampleReducer })
```

*No arquivo store/index.js:*

- [ ] importar `rootReducer` e usá-lo na criação da `store`
- [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)
- [ ] exportar a `store`

*No arquivo App.js:*
- [ ] importar a `store`
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados a todos os componentes encapsulados em `<App />`.

*Na pasta actions:*
- [ ] criar e exportar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [ ] criar e export os actions creators necessários

*Nos reducers:*
- [ ] criar os casos para cada action criada, retornando o devido estado atualizado

*Nos componentes que irão ler o estado:*
- [ ] criar a função `mapStateToProps`
- [ ] exportar usando o `connect`

*Nos componentes que irão modificar o estado:*
- [ ] criar a função `mapDispatchToProps`
- [ ] exportar usando o `connect`

```js
export default connect(mapStateToProps, mapDispatchToProps)(Component)
```