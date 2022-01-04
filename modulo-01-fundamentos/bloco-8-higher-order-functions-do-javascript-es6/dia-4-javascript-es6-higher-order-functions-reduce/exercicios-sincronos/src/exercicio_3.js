const { cervejas, pedidos, entregas } = require('./data');

/*
 * 3. Criar um array de objetos com as seguintes informações
 *
 * - id do pedido
 * - descriçao da cerveja
 * - quantidade de cervejas do pedido
 * - placa do veiculo que vai fazer a entrega
 */

const funcaoReducer = (acumulador, valorCorrente) => {
  const objeto = {
    id: valorCorrente.id,
    descricao: cervejas.find((codigo) => codigo.codigo === valorCorrente.codigoCerveja).descricao,
    quantidade: valorCorrente.quantidade,
    placa: entregas.find((codigo) => codigo.pedidoId === valorCorrente.id).placaVeiculo,
  };
  acumulador.push(objeto);
  return acumulador;
};

const arrayDeObjetos = pedidos.reduce(funcaoReducer, []);

console.log('O array formado é: ', arrayDeObjetos);
