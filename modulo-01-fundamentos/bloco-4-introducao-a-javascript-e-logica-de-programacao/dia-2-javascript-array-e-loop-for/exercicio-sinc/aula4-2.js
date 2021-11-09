
// array vazio
//let minhaFruta = "Maça"; // string
//let frutas = []; // array


// array atribuição local
//let frutas = ["Maça","Laranja","Abacaxi"]; // array

// array atribuição externa/global
/* let fruta1 = "Maça";
let fruta2 = "Laranja";
let fruta3 = "Abacaxi";

let frutas = [fruta1,fruta2,fruta3]; // array 

// array com atribuição hibrida
 let fruta1 = "Maça";
let fruta2 = "Laranja";

let frutas = [fruta1,fruta2,"abacaxi"]; */



// saída de dados com arrays
//console.log("saida: ", frutas)
/* console.log("saida: ", frutas[0]);
console.log("saida: ", frutas[1]);
console.log("saida: ", frutas[2]); */


// entrada de dados em arrays
    // DOC https://www.w3schools.com/jsref/jsref_obj_array.asp
/* let frutas = [];
frutas.push("Maça")
frutas.push("Laranja")
frutas.push("Abacaxi")
console.log("frutas: ", frutas) */

// tamanho do array
//console.log("length: ", frutas.length      )

// REVISÃO DO FOR c/ debuger  
/* 
let r = 0;


for( i = 0 ; i < 20  ; i++){
    r += i;
}

console.log("r: ", r)
 */

// FOR OF (ES6)

/* let frutas = ["Maça","Laranja","Abacaxi"];

for(let fruta of frutas ){
    console.log("resultado: ", fruta)
} */


// FOR COM ARRAY
let frutas = ["Maça","Laranja","Abacaxi","limao","Melância"];
let frutaCitricas = ["Laranja", "limao"];
let arrayFinal = [];


for( let i = 0 ;  i <  frutas.length ; i++){
    
    if(   frutas[i] == frutaCitricas[0]   ||  frutas[i] == frutaCitricas[1]  ){
        arrayFinal.push(frutas[i] )
    }else{
        console.log('não é citrica');
    }

}


for(let i = 0 ;  i <  arrayFinal.length ; i++){
    console.log("resultado: ", arrayFinal[i])
}

