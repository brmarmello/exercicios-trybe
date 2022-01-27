import React, { Component } from 'react';

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props

    let error = undefined
    if (value.length > 120) error = 'Texto Muito Grande!'
      
    // console.log(`Estou no Filho com o valor ${value}!`)
    return (
      <label>
      Diga qual é o seu Estado Favorito! Do Brasil ou do React, você quem sabe!
        <textarea
          name='estadoFavorito'
          value={value}
          onChange={handleChange}
        />
        <span>{ error !== undefined ? error : '' }</span>
      </label>
    )
  }
}

export default EstadoFavorito;
