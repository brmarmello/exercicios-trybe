import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito';
import './Form.css'

class Form extends Component {
  constructor() {
   super()

   this.handleChange = this.handleChange.bind(this)
   
   this.state = {
     estadoFavorito: '',
     email: '',
     nome: '',
     idade: 0,
     vaiComparecer: false,
     palavraChaveFavorita: '',
   }
  }

  handleChange({ target }) {

    // console.log(`Estou mudando o Estado do Pai!`)
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React: Ferramenta Incrível oiu Reagindo a Regionalismos?</h1>
        <form className='form'>
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={ this.handleChange } />

          <label>
            e-Mail:
            <input
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Nome:
            <input
              name='nome'
              type='text'
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </label>

        </form>

        <label>
          Idade:
          <input
            name='idade'
            type='number'
            value={this.state.idade}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Vai comparecer à conferência?
          <input
            name='vaiComparecer'
            type='checkbox'
            value={this.state.vaiComparecer}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Escolha sua palavra-chave favorita:
          <select
            name='palavraChaveFavorita'
            value={this.state.palavraChaveFavorita}
            onChange={this.handleChange}
          >
            <option value='escolha'>Escolha uma Opção</option>
            <option value='estado'>Estado</option>
            <option value='evento'>Evento</option>
            <option value='props'>Props</option>
            <option value='hooks'>Hooks</option>
          </select>
        </label>
        <input type="file" />
      </div>
    )
  }
}

export default Form;
