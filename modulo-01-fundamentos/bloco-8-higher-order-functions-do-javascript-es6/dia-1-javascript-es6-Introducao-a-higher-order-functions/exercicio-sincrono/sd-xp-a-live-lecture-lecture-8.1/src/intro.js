// OBJETIVO: DEIXAR NÍTIDO QUE FUNÇÃO É UM TIPO COMO OUTRO QUALQUER

const pi = 3.14159265359;
console.log(pi.toFixed(2));

const greetings = 'Hello, HOF!';
console.log(greetings.split(' '));

const isValid = true;
console.log(isValid.valueOf());

const person = {
  name: 'Alcione',
  age: 39,
};
console.log(Object.keys(person));

const names = ['José', 'Madalena', 'Epaminondas'];
names.pop();
console.log(names);
names.push('Hugo');
console.log(names);

const sayHello = () => console.log('Hello, HoF\'s!');
// console.log(typeof sayHello);

// sayHello.call();

const fun = sayHello;

fun();
