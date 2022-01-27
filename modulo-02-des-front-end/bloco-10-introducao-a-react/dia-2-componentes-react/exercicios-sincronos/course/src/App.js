import React from "react";
import './index.css';
import Card from './components/Card';
import contens from './data'


class App extends React.Component {
  
  render(){
    return (
      <main>
        <div>
          <h1>Conteudo</h1>
          <p>Acesse a agenda de cada módulo abaixo, ou continue aprendendo com nossas aulas ao vivo e trilha de Soft Skills.</p>
          <section> 
            {
              contens.map(item => {
                return <Card key={item.title} itemInfo={item}  />
              })
            }
          </section>
        </div>
      </main>
    );
  }
}

export default App;