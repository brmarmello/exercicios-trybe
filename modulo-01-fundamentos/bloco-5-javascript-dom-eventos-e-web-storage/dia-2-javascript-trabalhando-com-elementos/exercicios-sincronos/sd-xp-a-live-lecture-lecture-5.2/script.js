
// Cirar elemento HTML por Javascript() 
let div = document.createElement('div');
div.className = 'main-box';
div.id = 'fourth';


// Adicionar e remover elemento no DOCUMENTO HTML
//document.getElementsByTagName('main')
main.appendChild(div);
main.removeChild(div);
div.innerText = 'conteudo....';
// encontrar o primeiro filho
//let firstElem = document.querySelector('#first').firstElementChild;
//console.dir(firstElem);
// encontrar o próximo irmão
//let proxElem = document.querySelector('#first').nextElementSibling;
//console.log(proxElem);

// colocar multiplas classes aos elementos por javascript
//drawing.className = "yellow circle small";
/* 
drawing.classList.remove('red');
drawing.classList.remove('circle');
drawing.classList.remove('small');

drawing.classList.add('yellow');
drawing.classList.add('circle');
drawing.classList.add('small');
 */
//console.log(drawing.classList)

// Converter array em STRING
 let frutas = ["Banana","Laranja","Maça","Manga"];
//console.log(frutas)
let resultado =  frutas.join(',')
//console.log(resultado); 

// Converter STRING em ARRAY
let frutasArr = resultado.split(',');
//console.log('frutasArr: ', frutasArr)


// EXEMPLOS COM FUNÇÕES
let arrClasses = ['yellow', 'circle', 'small'];
let arrClasses2 = ['red', 'square', 'small'];
let arrClasses3 = ['green', 'circle', 'small'];

let ball1 = createCustomElement(arrClasses);
//second.appendChild(ball2);
//document.querySelector('.main-box').appendChild(ball1);
document.querySelectorAll('.main-box')[1].appendChild(ball1);

let ball2 = createCustomElement(arrClasses2);
third.appendChild(ball2);

createCustomElement(arrClasses3);

function createCustomElement(myClasses){
    let element = document.createElement('div');
    let str = myClasses.join(' ');
    element.className = str;

    return element;
}