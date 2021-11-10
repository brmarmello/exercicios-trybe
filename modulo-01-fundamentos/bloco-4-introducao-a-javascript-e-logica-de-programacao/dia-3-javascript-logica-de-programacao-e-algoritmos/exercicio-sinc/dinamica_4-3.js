// EXEMPLO FOR DENTRO DE FOR
let qtd = 10;
let ingredientes = ["queijo","presunto","maionese"];
let sacola = [];
for(let index = 0; index < 10; index+=1){
    //console.log('exectuou fora: ', index)

    let pao = [];

    for( let index = 0; index < ingredientes.length; index+=1){
       // console.log('exectuou dentro: ', index);
       pao.push(ingredientes[index])
    }
    sacola.push(pao);
  }