// Exercício Nº. 01 - Crie uma classe chamada Tv, com os atributos:
//   brand: marca da TV;
//   size: tamanho em polegadas;
//   resolution: resolução da tela;
//   connections: conexões disponíveis(HDMI, Ethernet, etc.);
//   connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.

  class tv {
    brand: string;
    size: number;
    resolution: string;
    connections: string[];
    connectedTo: string;

    constructor(b: string, s: number, r: string, c: string[]) {
      this.brand = b;
      this.size = s;
      this.resolution = r;
      this.connections = c;
    }

    // Exercício Nº. 02 - Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
      turnOn():void {
        console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \navailable connections: ${this.connections}`);
      };

  };

// Exercício Nº. 03 - Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
  const minhaTv = new tv('LG', 55, '4K', ['HDMI', 'Ethernet', 'Wifi']);
  minhaTv.turnOn();

// Pilar 1 - ABSTRAÇÃO:
  // Exercício Nº. 04 - Pense em três métodos que você utilizou com alguma frequência ao longo do curso mesmo sem entender como eles funcionavam "nos bastidores".
  // Cronometre ⏲️ cinco minutos para pensar e siga adiante!

// Pilar 2 - ENCAPSULAMENTO:
// Exemplo de Sintaxe de Encapsulamento.
  class Person {
    name: string;
    private _weight: number;
    private _age: number;
    readonly height: number;

    constructor(name: string, height: number, weight: number, age: number) {
      this.name = name;
      this._weight = weight;
      this._age = age;
      this.height = height;
    }

    getWeight() {
      return this._weight;
    }

  // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
    get age() {
      return this._age;
    }

  // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
    set age(newValue: number) {
      if (newValue >= 0 && newValue < 200) {
        this._age = newValue;
      }
    }

    birthday() {
      this._age += 1;
    }

  }

  const p1 = new Person('Maria', 171, 58, 19);
  const p2 = new Person('João', 175, 66, 18);

/*
// exemplo de sintaxes que são VÁLIDAS neste contexto:
  // Alteração direta de variável pública
  p1.name = 'Mariah';
  // Acesso direto a variável pública
  console.log(p1.name);
  // Acesso a método público que manipula atributo privado
  console.log(p1.getWeight());
  // Acesso a método com getter para manipular atributo privado como se fosse público
  console.log(p2.age);
  // Acesso a método público que manipula atributo privado
  p2.birthday();
  console.log(p2.age);
  // Acesso a método com setter para manipular atributo privado como se fosse público
  p2.age = 17;
  console.log(p2.age);
  // Leitura de atributo readonly
  console.log(p1.height);

  /*
  Saída:
  Mariah
  58
  18
  19
  17
  171
  */
  // Observe que há uma validação de dados no set age.
  //É para este tipo de coisa que utilizamos atributos privados: para validar alterações nos dados.
  // Considere, após o código anterior, rodar o seguinte código:
  p2.age = 300;
  console.log(p2.age);
  // Saída: 17
  // A idade da pessoa p2 continua 17, pois a validação no set age impede que existam pessoas com 300 anos de idade.
  // Esse é o poder do encapsulamento.


/*
// Agora um exemplo de sintaxes que são INVÁLIDAS neste contexto:
  // Acesso externo à classe a atributo privado
  p1._weight;
  p1._weight = 1;
  // Acesso a atributo inexistente
  p1.weight;
  p1.weight = 1;
  // Escrita em atributo readonly
  p1.height = 1;
*/


/*
// Para Fixar:
  // Utilizando o mesmo código dos exercícios de fixação anteriores:
  // Exercício Nº. 05 - Altere a visibilidade dos atributos definidos na classe Tv para private.
  class Tv {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;

    constructor(b: string, s: number, r: string, c: string[]) {
      this._brand = b;
      this._size = s;
      this._resolution = r;
      this._connections = c;
    }

    turnOn():void {
      console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
    }
  }

  // Exercício Nº. 06 - Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.
  //   O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
  //     Em caso positivo, definir este valor para o atributo _connectedTo;
  //     Em caso negativo, imprimir no console a mensagem "Sorry, connection unavailable!"
  get connectedTo(): string | undefined {
    return this._connectedTo as string;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }

  // Exercício Nº. 07 - Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.
  minhaTv.connectedTo = 'Wi-Fi';
  console.log('Connected to: ', minhaTv.connectedTo);
*/
