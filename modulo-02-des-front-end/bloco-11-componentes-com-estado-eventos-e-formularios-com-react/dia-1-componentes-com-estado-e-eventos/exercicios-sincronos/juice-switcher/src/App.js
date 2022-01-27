import React from "react";
import "./App.css";
import colors from "./colorsData";
import copo from './copo.png'

// 1. listar as cores ✅
// 2. aparecer o quadradinho com a cor 🤩
// 3. Fazer o input 👍
// 4. Armazenar as informações do Input
// 5. Atualizar essas informações
// 6. filtrar as cores
// 7. adicionar o copo e mudar de cor.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      typedText: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      typedText: event.target.value,
    });
  }

  firstColorHex() {
    if (this.state.typedText === "") {
      return "#303030";
    }
    const firstColor = colors.find((color) =>
      color.name.includes(this.state.typedText)
    );
    if (!firstColor) {
      return "#303030";
    }
    return firstColor.hex;
  }

  render() {
    return (
      <div>
        <h1>🍹 Que Suco Foi Esse? 🍹</h1>
        <input
          value={this.state.typedText}
          onChange={this.handleChange}
          type='text'
        />

        <img
          src={copo}
          alt='Imagem do Copo'
          width='200'
          style={{ backgroundColor: this.firstColorHex() }}
        />

        <hr />
        <ul>
          {colors
            .filter((color) => color.name.includes(this.state.typedText))
            .map((color) => {
              return (
                <li key={color.hex}>
                  <div
                    style={{
                      backgroundColor: color.hex,
                    }}
                    className='color-display'
                  ></div>

                  {color.name}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
